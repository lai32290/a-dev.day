import { useLoaderData, Link } from "remix";
import { getPosts } from '~/post'
import type { Post } from "~/post";

export async function loader() {
  return getPosts();
}

export default function Index() {
  const posts = useLoaderData<Post[]>();
  return (
    <ul>
      {posts.map((post) => (
        <li
          key={post.slug}
          className="flex justify-between leading-10 flex-col-reverse md:flex-row mb-6 md:mb-1">
          <Link to={post.slug} className="text-2xl text-sky-200 underline">
            { post.title }
          </Link>

          <span>{ post.createdAt }</span>
        </li>
      ))}
    </ul>
  );
}
