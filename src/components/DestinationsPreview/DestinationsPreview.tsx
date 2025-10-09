import { BookingButton } from '../Button/BookingButton/BookingButton';
import './DestinationsPreview.css'
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
        <div className='container-preview-destiny'>
            <img src={image} alt={`Imagen de ${nameDestiny}`} />
            <h2>{nameDestiny}</h2>
            <p className='destination-type'>{type}</p>
            <p className='destination-description'>{description}</p>
            <div className='activies-section'>
                <ul>
                    <h3>Actividades:</h3>
                    {activitys.map((activity, index) => (
                        <li key={index}>{activity}</li>
                    ))}
                </ul>
            </div>
            <p>
                <strong>${price.toLocaleString()}COP</strong>
            </p>
            <BookingButton />
        </div>
    );
};