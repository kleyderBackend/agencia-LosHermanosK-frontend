import styles from './TourCard.module.css';

interface TourCardProps {
    name: string;
    description: string;
    activities: string[];
    destinations: string[];
    prices: { plan: string; price: number }[];
    duration: string;
    seasonNote: string;
    image: string;
}

export const TourCard = ({ name, description, activities, destinations, prices, duration, seasonNote, image }: TourCardProps) => {
    return (<>

        <section className={styles.sectionCardTour}>
            <div className={styles.sectionDivTour}>
                <h2 className={styles.seectionNameTour}>{name}</h2>
                <img src={image} alt={`imagen de ${name}`} className={styles.imgSectionTour} />
                <ul className={styles.ulSectionTour}>
                    <li>{destinations}</li>
                </ul>
                <h3>{description}</h3>
                <div className={styles.details}>
                    <ul className={styles.ulSectionTour}>
                        {destinations.map((dest, i) => (
                            <li key={i}>{dest}</li>
                        ))}
                    </ul>
                    <ul className={styles.ulActivitiesTour}>
                        {activities.map((act, i) => (
                            <li key={i}>{act}</li>
                        ))}
                    </ul>
                    <ul className={styles.ulPriceTourd}>
                        {prices.map((p, i) => (
                            <li key={i}>
                                {p.plan}: ${p.price}
                            </li>
                        ))}
                    </ul>
                </div>
                <strong> <p>{duration}</p></strong>
                <p className={styles.NoteSectionTour}>{seasonNote}</p>
            </div>
        </section>
    </>
    );
};