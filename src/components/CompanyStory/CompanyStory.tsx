import styles from './CompanyStory.module.css';

interface CompanyStoryProps {
    title: string;
    howItStarted: string;
    evolution?: string;
    purpose: string;
    timelineImage: string;
}

export const CompanyStory = ({
    title,
    howItStarted,
    evolution,
    purpose,
    timelineImage
}: CompanyStoryProps) => {
    return (
        <section className={styles.sectionCompanyStory}>
            <h2>{title}</h2>
            <article className={styles.storyContent}>
                <div className={styles.textBlock}>
                    <p>{howItStarted}</p>
                    {evolution && <p>{evolution}</p>}
                </div>
                <p className={styles.purpose}>{purpose}</p>
                <figure className={styles.timelineFigure}>
                    <img src={timelineImage} alt="Línea de tiempo de la empresa" />
                    <figcaption>Nuestra evolución a través del tiempo</figcaption>
                </figure>
            </article>
        </section>
    );
};
