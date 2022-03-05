import { useLoaderData } from 'remix';
import invariant from 'tiny-invariant';
import { getPost } from '~/post';

export async function loader({ params }) {
  invariant(params.slug, 'expected params.slug');
  return getPost(params.slug);
} 

export default function PostSlug() {
  const post = useLoaderData();

  return (
    <main>
      <h1>{ post.title }</h1>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  )
}

export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <div>jfids</div>
  )
}
