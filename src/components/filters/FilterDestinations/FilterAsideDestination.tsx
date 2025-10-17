import styles from './FilterDestination.module.css';

interface FilterDestinationProps {
    biodiversidad: boolean;
    playa: boolean;
    cascada: boolean;
    termales: boolean;
    setbiodiversidad: (value: boolean) => void;
    setPlaya: (value: boolean) => void;
    setCascada: (value: boolean) => void;
    setTermales: (value: boolean) => void;
}

export const FilterDestination = ({
    biodiversidad, setbiodiversidad,
    playa, setPlaya,
    cascada, setCascada,
    termales, setTermales
}: FilterDestinationProps) => {
    return (
        <aside className={styles.filterAside}>
            <h2>Filtrar Destino</h2>
            <form>
                <label htmlFor="biodiversidad">
                    Biodiversidad
                    <input
                        type="checkbox"
                        id="biodiversidad"
                        checked={biodiversidad}
                        onChange={(e) => setbiodiversidad(e.target.checked)}
                    />
                </label>
                <label htmlFor="playa">
                    Playa
                    <input
                        type="checkbox"
                        id="playa"
                        checked={playa}
                        onChange={(e) => setPlaya(e.target.checked)}
                    />
                </label>
                <label htmlFor="cascada">
                    Cascada
                    <input
                        type="checkbox"
                        id="cascada"
                        checked={cascada}
                        onChange={(e) => setCascada(e.target.checked)}
                    />
                </label>
                <label htmlFor="termales">
                    Termales
                    <input
                        type="checkbox"
                        id="termales"
                        checked={termales}
                        onChange={(e) => setTermales(e.target.checked)}
                    />
                </label>
            </form>
        </aside>
    );
};