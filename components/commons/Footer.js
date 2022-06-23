import styles from "../../styles/commons.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <p>
          Website developed by <a href="https://github.com/MarcoCusenza">Marco Cusenza</a> using <a href="https://nextjs.org/">Next.js</a> and <a href="https://www.vantajs.com/">Vanta.js</a>
        </p>
      </div>
    </footer>
  );
}
