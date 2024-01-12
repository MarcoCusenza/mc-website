import styles from "../../styles/commons.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <p className={styles.developedBy}>
                    Website developed by <a href="https://github.com/MarcoCusenza">me</a> using <a href="https://react.dev/">React</a>, <a href="https://nextjs.org/">Next.js</a> and <a href="https://www.vantajs.com/">Vanta.js</a>
                </p>
            </div>
        </footer>
    );
}
