import styles from "../../styles/sectionstyle/works.module.scss";

export default function Works() {
  return (
    <section id="works" className={styles.worksContainer}>
      <div className={styles.title}>Works and Exercises</div>
      <div className="grid">
        <div className="card">
          <h2>Lavoro 1</h2>
          <p>Questo è il lavoro 1</p>
        </div>
        <div className="card">
          <h2>Lavoro 2</h2>
          <p>Questo è il lavoro 2</p>
        </div>
      </div>
      <div className="other">
        View other projects on my <a href="https://github.com/MarcoCusenza">GitHub account</a>
      </div>
    </section>
  );
}
