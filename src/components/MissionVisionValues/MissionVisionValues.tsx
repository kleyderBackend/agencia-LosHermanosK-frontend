import styles from './MissionVisionValues.module.css';

interface MissionVisionValuesProps {
    content: {
        mission: string;
        vision: string;
        values: string;
    };
}

export const MissionVisionValues = ({ content }: MissionVisionValuesProps) => {
    return (
        <section className={styles.sectionMVV}>
            <div className={styles.block}>
                <h3>Misión</h3>
                <p>{content.mission}</p>
            </div>
            <div className={styles.block}>
                <h3>Visión</h3>
                <p>{content.vision}</p>
            </div>
            <div className={styles.block}>
                <h3>Valores</h3>
                <p>{content.values}</p>
            </div>
        </section>
    );
};