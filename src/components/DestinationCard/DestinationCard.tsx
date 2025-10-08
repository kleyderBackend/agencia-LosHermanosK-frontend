import { BookingButton } from '../Button/BookingButton/BookingButton';
import './DestinationCar.css'
interface DestinationCardProps {
    nameDestiny: string;
    image: string;
    price: number
};

export const DestinationCard = ({ nameDestiny, image, price }: DestinationCardProps) => {
    return (
        <>
            <section className='hero-principal-destinations'>
                <h3>{nameDestiny}</h3>
                <img src={image} />
                <h5>{price}</h5>
                <BookingButton />
            </section>
        </>
    );
};