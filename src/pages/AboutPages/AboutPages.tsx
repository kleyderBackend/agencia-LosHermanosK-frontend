import { useNavigate } from "react-router-dom"; // ← Necesario para usar navigate
import { Navbar } from "../../components/Navbar/Navbar";
import { AboutHeader } from "../../components/AboutHeader/AboutHeader";
import { CompanyStory } from "../../components/CompanyStory/CompanyStory";
import { MissionVisionValues } from "../../components/MissionVisionValues/MissionVisionValues";
import { ExperienceStats } from "../../components/ExperienceStats/ExperienceStats";
import { CallToAction } from "../../components/CallToAction/CallToAction";
import { Footer } from "../../components/Footer/Footer";
import styles from "./AboutPages.module.css";

export const AboutPage = () => {
    const navigate = useNavigate(); // ← Esto activa la navegación
    return (
        <>
            <header>
                <Navbar />
                <AboutHeader
                    title="Conócenos"
                    imageContext="/img/nosotros.png"
                    description="Descubre nuestra historia y lo que nos impulsa a navegar más allá."
                />
            </header>
            <main className={styles.mainAboutPage}>
                <CompanyStory
                    title="Transporte Marítimo Los Hermanos K"
                    howItStarted="Nuestra historia comenzó con un pequeño barco y un gran sueño..."
                    evolution="Hoy contamos con una flota moderna y rutas exclusivas en todo el Caribe."
                    purpose="Conectar personas, culturas y experiencias a través del mar."
                    timelineImage="/img/timelineImage.png"
                />

                <MissionVisionValues
                    content={{
                        mission:
                            "Brindar experiencias marítimas seguras, memorables y sostenibles para todos nuestros viajeros.",
                        vision:
                            "Ser la agencia marítima líder en el Caribe reconocida por su innovación y compromiso humano.",
                        values:
                            "Pasión por el mar, seguridad, respeto por el medio ambiente y servicio excepcional.",
                    }}
                />
                <ExperienceStats
                    stats={{
                        years: 10,
                        clients: 2000,
                        destinations: 15,
                        satisfaction: 100,
                    }}
                />
                <CallToAction
                    phrase="¿Listo para zarpar con nosotros?"
                    buttonLabel="Reserva tu aventura"
                    onClick={() => navigate("/contact")}
                />
            </main>
            <Footer />
        </>
    );
};
