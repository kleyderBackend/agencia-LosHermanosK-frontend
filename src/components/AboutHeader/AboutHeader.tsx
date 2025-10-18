import styles from './AboutHeader.module.css';

interface AboutHeaderProps {
    title: string;
    imageContext: string;
    description: string;
}

export const AboutHeader = ({ title, imageContext, description }: AboutHeaderProps) => {
    return (
        <header className={styles.dvContainerAbout}>
            <h2>{title}</h2>
            <img src={imageContext} alt={`Imagen representativa de ${title}`} />
            <p>{description}</p>
            <button id="btnMoreKnow" onClick={() => window.location.href = '/about/story'}>
                Conoce más
            </button>
        </header>
    );
};
