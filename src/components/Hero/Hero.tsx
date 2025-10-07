import './Hero.css';

interface HeroProps {
    text: string;
    subText: string
    image: string;
}
export const Hero = ({ text, subText, image }: HeroProps) => {
    return (
        <section className='hero-principal'>
            <div className='hero-text'>
                <h3>{text}</h3>
                <p>{subText}</p>
            </div>
            <div className='div-logo'>
                <img src={image} alt="logotipo de la agencia" />
            </div>
        </section>
    );
};