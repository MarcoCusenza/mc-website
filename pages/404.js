import Layout from "../components/commons/layout";
import styles from "../styles/pagestyle/404.module.scss"

// pages/404.js
export default function Custom404() {
  return (
    <Layout>
      <h1 className={styles.notFound}>404 - Page Not Found</h1>
    </Layout>
  );
}