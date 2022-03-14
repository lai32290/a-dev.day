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
        <script dangerouslySetInnerHTML={{__html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TZ4NBXX');
          `}} />
        <Meta />
        <Links />
      </head>
      <body className="h-screen">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />

        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TZ4NBXX"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
      </body>
    </html>
  );
}
