import { Navbar } from "../../components/Navbar/Navbar";
import { TourPreview } from "../../components/TourPreview/TourPreview";
import { Footer } from "../../components/Footer/Footer";
import tours from '../../data/Tours.json';
import styles from './TourPage.module.css';


export const TourPages = () => {
    return (<>
        <Navbar />
        <main>
            <div className={styles.tourViewPage}>
                {tours.map(destTour => (<TourPreview
                    key={destTour.id}
                    name={destTour.name}
                    image={destTour.image}
                    description={destTour.description}
                    destinations={destTour.destinations}
                    activities={destTour.activities}
                    prices={destTour.prices}
                    duration={destTour.duration}
                    seasonNote={destTour.seasonNote}
                />))}
            </div>
        </main>
        <Footer />
    </>
    );
};