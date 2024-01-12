import styles from "../../styles/sectionstyle/landing.module.scss";

export default function Landing() {
    return (
        <section id="landing" className={styles.landingPage}>
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Marco Cusenza</h1>
                <div className={styles.subtitle}>Frontend Web Developer</div>
            </div>
        </section>
    );
}
