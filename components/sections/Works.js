import styles from "../../styles/sectionstyle/works.module.scss";

export default function Works() {

    const works = [
        {
            title: "Work 01",
            description: "This is work 01"
        },
        {
            title: "Work 02",
            description: "This is work 02"
        },
        {
            title: "Work 03",
            description: "This is work 03"
        },
        {
            title: "Work 04",
            description: "This is work 04"
        },
        {
            title: "Work 05",
            description: "This is work 05"
        },
        {
            title: "Work 06",
            description: "This is work 06"
        }
    ];

    return (
        <section id="works" className={styles.worksContainer}>
            <div className={styles.sectionTitle}>Works and Exercises</div>
            <div className={styles.grid}>
                {works.map((item, index) => {
                    return (
                        <div className={styles.cardWrapper} key={index}>
                            <div className={styles.card}>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={styles.disclaim}>
                View other projects on my <a className={styles.githubLink} href="https://github.com/MarcoCusenza">GitHub account</a>
            </div>
        </section>
    );
}
