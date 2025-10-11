import styles from './TourPreview.module.css';

interface TourPreviewProps {
    name: string;
    description: string;
    activities: string[];
    destinations: string[];
    prices: { plan: string; price: number }[];
    duration: string;
    seasonNote: string;
    image: string;
}

export const TourPreview = ({ name, description, activities, destinations,prices, duration, seasonNote, image }: TourPreviewProps) => {
    return (
        <div className={styles.containerTour}>
            <h2 className={styles.tourNameDiv}>{name}</h2>
            <img src={image} alt={`imagen de ${name}`} />
            <h3>{description}</h3>
            <div className={styles.detailsTourd}>
                <ul className={styles.ulTourSelection}>
                    {destinations.map((dest, i) => (
                        <li key={i}>{dest}</li>
                    ))}
                </ul>
                <ul className={styles.ulTourActivities}>
                    {activities.map((act, i) => (
                        <li key={i}>{act}</li>
                    ))}
                </ul>
                <ul className={styles.ulPrice}>
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
    );
};