import path from 'path';
import invariant from 'tiny-invariant';
import { marked } from 'marked';
import fs from 'fs/promises';
import parseFrontMatter from 'front-matter';

export type Post = {
  slug: string;
  title: string;
}


const postsPath = process.env.NODE_ENV === "development" ? path.resolve(__dirname, '../posts') : path.resolve(__dirname, './posts');

function isValidPostAttributes(attributes) {
  return attributes?.meta?.title;
}

export async function getPosts() {
  console.log('aaaaaa',
    await fs.readdir(path.resolve(__dirname)),
    await fs.readdir(path.resolve(__dirname, '..')),
    await fs.readdir(path.resolve(__dirname, '../..')),
  );
  const dir = await fs.readdir(postsPath);

  return Promise.all(
    dir.map(async filename => {
      const file = await fs.readFile(path.join(postsPath, filename));

      const { attributes } = parseFrontMatter(file.toString());

      invariant(
        isValidPostAttributes(attributes),
        `${filename} has bad meta data!`
      );

      return {
        slug: filename.replace(/\.mdx?$/, ''),
        title: attributes.meta.title
      };
    })
  );
}

export async function getPost(slug: string) {
  const filepath = path.join(postsPath, `${slug}.mdx`);
  const file = await fs.readFile(filepath);
  const { attributes, body } = parseFrontMatter(file.toString());

  invariant(
    isValidPostAttributes(attributes),
    `Post ${filepath} is missing attributes`
  );

  const html = marked(body);
  return {
    slug,
    title: attributes.meta.title,
    html
  };
}

type NewPost = {
  title: string;
  slug: string;
  markdown: string;
};

export async function createPost(post: NewPost) {
  const md = `---
meta:
  title: ${post.title}
---

${post.markdown}
  `
  await fs.writeFile(
    path.join(postsPath, `${post.slug}.mdx`),
    md
  );

  return getPost(post.slug);
}
