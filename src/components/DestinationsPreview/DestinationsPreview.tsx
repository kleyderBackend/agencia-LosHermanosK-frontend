import { BookingButton } from '../Button/BookingButton/BookingButton';
import styles from './DestinationsPreview.module.css'; // Cambio importante aquí

interface DestinationsPreviewProps {
    nameDestiny: string;
    type: string;
    description: string;
    image: string;
    activitys: string[];
    price: number;
}

export const DestinationsPreview = ({ nameDestiny, type, description, image, activitys, price }: DestinationsPreviewProps) => {
    return (
        <div className={styles.containerPreviewDestiny}> {/* Usar styles */}
            <img src={image} alt={`Imagen de ${nameDestiny}`} />
            <h2>{nameDestiny}</h2>
            <p className={styles.destinationType}>{type}</p> {/* Usar styles */}
            <p className={styles.destinationDescription}>{description}</p> {/* Usar styles */}
            <div className={styles.activiesSection}> {/* Usar styles */}
                <ul className={styles.ulDivDestinations}> {/* Usar styles */}
                    <h3>Actividades:</h3>
                    {activitys.map((activity, index) => (
                        <li key={index}>{activity}</li>
                    ))}
                </ul>
            </div>
            <p>
                <strong>${price.toLocaleString()} COP</strong>
            </p>
            <BookingButton />
        </div>
    );
};