import styles from'./DestinationCar.module.css'

interface DestinationCardProps {
    nameDestiny: string;
    image: string;
    price: number;
    onlickItem: () => void;
};

export const DestinationCard = ({ nameDestiny, image, price, onlickItem }: DestinationCardProps) => {
    return (
        <section className={styles.heroPrincipalDestinations} onClick={onlickItem}>
            <h3 id="title-Desiny">{nameDestiny}</h3>
            <img src={image} alt={nameDestiny} id="img-destiny"/>
            <h5>{price}</h5>
        </section>
    );
};