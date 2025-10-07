import { Navbar } from "../../components/Navbar/Navbar";
import { Hero } from "../../components/Hero/Hero";
import { Footer } from "../../components/Footer/Footer";
import './LandingPage.css';

export const LandingPage = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero text="Hermanos K"
                    subText="Danos el placer de atenderte, viaja comodo y seguro con nosotro"
                    image="public/img/logo.jpg"
                />
            </main>
            <Footer />
        </>
    )
}