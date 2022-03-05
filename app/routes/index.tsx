import { useLoaderData, Link } from "remix";
import { getPosts } from '~/post'
import type { Post } from "~/post";
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';

export async function loader() {
  return getPosts();
}

export default function Index() {
  const posts = useLoaderData<Post[]>();

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="bg-gray-600 text-slate-50 px-14 py-7 grow">
        <ul>
          {posts.map((post) => (
            <li key={post.slug} className="flex justify-between">
              <Link to={post.slug} className="text-2xl text-sky-200 underline">
                { post.title }
              </Link>

              <span>4 March, 2022</span>
            </li>
          ))}
        </ul>
      </div>

      <Footer />
    </div>
  );
}
