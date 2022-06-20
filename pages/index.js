import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/commons/layout";

import Header from "../components/commons/header";
import Main from "../components/sections/main";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Header />
      
      <Main />

    </Layout>
  );
}
