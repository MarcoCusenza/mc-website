import Head from "next/head";

import Header from "./header";
import Footer from "./Footer";

export const siteTitle = "Marco Cusenza";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Marco Cusenza website and portfolio" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />

      {/* Main */}
      {children}

      <Footer />
    </>
  );
}
