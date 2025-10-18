import styles from './CallToAction.module.css';

interface CallToActionProps {
    phrase: string;
    buttonLabel: string;
    onClick?: () => void; // para manejar la acción del botón (navegar o abrir modal)
}

export const CallToAction = ({ phrase, buttonLabel, onClick }: CallToActionProps) => {
    return (
        <section className={styles.callToActionSection}>
            <div className={styles.callToActionContent}>
                <h2>{phrase}</h2>
                <button onClick={onClick} className={styles.ctaButton}>
                    {buttonLabel}
                </button>
            </div>
        </section>
    );
};
