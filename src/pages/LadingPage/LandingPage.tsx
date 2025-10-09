import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";
import { Footer } from "../../components/Footer/Footer";
import styles from './LandingPage.module.css';

export const LandingPage = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
                <main className={styles.mainPagePrincipal}>
                    <Hero text="Hermanos K"
                        subText="Danos el placer de atenderte, viaja comodo y seguro con nosotro"
                        image="/img/logo-Photoroom.png"
                    />
                </main>
            <Footer />
        </>
    );
};