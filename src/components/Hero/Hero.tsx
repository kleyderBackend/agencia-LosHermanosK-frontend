import styles from './Hero.module.css';

interface HeroProps {
    text: string;
    subText: string
    image: string;
}
export const Hero = ({ text, subText, image }: HeroProps) => {
    return (
        <section className={styles.heroPrincipal}>
            <div className={styles.heroText} >
                <h3 className={styles.heroTitle}>{text}</h3>
                <p className={styles.heroSubText}>{subText}</p>
            </div>
            <div className={styles.heroDivLogo}>
                <img src={image} alt="logotipo de la agencia" />
            </div>
        </section>
    );
};