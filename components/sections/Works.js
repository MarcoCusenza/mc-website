import styles from "../../styles/sectionstyle/works.module.scss";

export default function Works() {
  return (
    <section id="works" className={styles.worksContainer}>
      <div className={styles.description}>I MIEI LAVORI</div>
      <a href="https://github.com/MarcoCusenza">My GitHub</a>
    </section>
  );
}
