import Head from "next/head";
import Layout, { siteTitle } from "../components/commons/layout";

import Main from "../components/sections/main";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Main />

    </Layout>
  );
}
