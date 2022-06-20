import Head from "next/head";

import styles from "../../styles/commons.module.scss";

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

      {/* Main */}
      <main>{children}</main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <p>
            Website developed by <a href="https://github.com/MarcoCusenza">Marco Cusenza</a> using <a href="https://nextjs.org/">Next.js</a> and <a href="https://www.vantajs.com/">Vanta.js</a>
          </p>
        </div>
      </footer>
    </>
  );
}
