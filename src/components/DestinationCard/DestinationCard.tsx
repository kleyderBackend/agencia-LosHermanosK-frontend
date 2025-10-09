import './DestinationCar.css'

interface DestinationCardProps {
    nameDestiny: string;
    image: string;
    price: number;
    onlickItem: () => void;
};

export const DestinationCard = ({ nameDestiny, image, price, onlickItem }: DestinationCardProps) => {
    return (
        <section className='hero-principal-destinations' onClick={onlickItem}>
            <h3>{nameDestiny}</h3>
            <img src={image} alt={nameDestiny} />
            <h5>{price}</h5>
        </section>
    );
};