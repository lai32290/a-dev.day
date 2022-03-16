import { useLoaderData, Link } from 'remix';
import invariant from 'tiny-invariant';
import { getPost } from '~/post';
import slugStyle from '~/styles/$slug.css';
import proseStyle from '~/styles/prose.css';

export async function loader({ params }: any) {
  invariant(params.slug, 'expected params.slug');
  return getPost(params.slug);
} 

export function links() {
  return [{
    rel: 'stylesheet',
    href: slugStyle
  }, {
    rel: 'stylesheet',
    href: proseStyle
  }];
}

export function meta({ data }: any) {
  return { title: data.title };
};

export default function PostSlug() {
  const post = useLoaderData();

  return (
    <main className="py-7 grow" id="post-content">
      <h1>{ post.title }</h1>

      <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  );
}

export function ErrorBoundary({ error }: any) {
  console.error(error);
  return (
    <div>jfids</div>
  )
}
