import styles from './ExperienceStats.module.css';

interface ExperienceStatsProps {
    stats: {
        years: number;
        clients: number;
        destinations: number;
        satisfaction: number;
    };
}

export const ExperienceStats = ({ stats }: ExperienceStatsProps) => {
    return (
        <section className={styles.sectionExperienceStats}>
            <div><h3>{stats.years}+</h3><p>Años navegando</p></div>
            <div><h3>{stats.clients}+</h3><p>Clientes felices</p></div>
            <div><h3>{stats.destinations}</h3><p>Destinos exclusivos</p></div>
            <div><h3>{stats.satisfaction}%</h3><p>Satisfacción garantizada</p></div>
        </section>
    );
};