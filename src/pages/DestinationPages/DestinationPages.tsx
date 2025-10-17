import { useState } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { FilterDestination } from '../../components/filters/FilterDestinations/FilterAsideDestination';
import { DestinationCard } from '../../components/DestinationCard/DestinationCard';
import { Footer } from '../../components/Footer/Footer';
import destiny from '../../data/DestinationData.json';
import { usePreviewSelection } from '../../hooks/usePreviewSelection';
import { DestinationsPreview } from '../../components/DestinationsPreview/DestinationsPreview';
import styles from './DestinationPages.module.css';

export const DestinationPage = () => {
    const [biodiversidad, setbiodiversidad] = useState(false);
    const [playa, setPlaya] = useState(false);
    const [cascada, setCascada] = useState(false);
    const [termales, setTermales] = useState(false);

    const filteredDestinations = destiny.filter(des => {
        if (biodiversidad && des.type === 'biodiversidad') return true;
        if (playa && des.type === 'playa') return true;
        if (cascada && des.type === 'cascada') return true;
        if (termales && des.type === 'termales') return true;
        if (!biodiversidad && !playa && !cascada && !termales) return true;
        return false;
    });

    const { selected, selectItem } = usePreviewSelection();

    return (
        <>
            <Navbar />
            <main className={styles['main']}>
                <FilterDestination
                    biodiversidad={biodiversidad}
                    playa={playa}
                    cascada={cascada}
                    termales={termales}
                    setbiodiversidad={setbiodiversidad}
                    setPlaya={setPlaya}
                    setCascada={setCascada}
                    setTermales={setTermales}
                />

                <div className={styles['cardContainer']}>
                    <h2>Descubre Nuquí aquí</h2>
                    {filteredDestinations.map(des => (
                        <DestinationCard
                            key={des.id}
                            nameDestiny={des.name}
                            image={des.image}
                            price={des.price}
                            onlickItem={() => selectItem(des)}
                        />
                    ))}
                    {selected && (
                        <DestinationsPreview 
                            nameDestiny={selected.name}
                            type={selected.type}
                            description={selected.description}
                            image={selected.image}
                            activitys={selected.activitys}
                            price={selected.price}
                        />
                    )}
                </div>
            </main>
            <Footer />
        </>
    );
};