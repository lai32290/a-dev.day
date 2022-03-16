import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./styles/app.css"
import prismStyles from "./styles/prism.css"
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';
import Subscriber from "~/components/Subscriber";


export function links() {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: prismStyles },
  ]
}

export const meta: MetaFunction = () => {
  return { title: "a dev.day" };
};

export default function App() {
  return (
    <html lang="en" >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />


        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MHDS3DKFYB"></script>

        <script dangerouslySetInnerHTML={{__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-MHDS3DKFYB');
          `}} />
        <Meta />
        <Links />
      </head>
      <body className="h-screen">
        <div className="flex flex-col h-screen">
          <Navbar />
          <div className="bg-gray-600 text-slate-50 px-5 md:px-60 py-7 grow">
            <Outlet />
          </div>
          <Subscriber />
          <Footer />
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
