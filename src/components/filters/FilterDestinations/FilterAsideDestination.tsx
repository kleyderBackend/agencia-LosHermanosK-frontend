import './FilterDestination.css';
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
        <aside className='filter-aside'>
            <h2>filtrar Destino</h2>
            <form action="">
                <label htmlFor="Selva">biodiversidad</label>
                <input type="checkbox" name="biodiversidad" checked={biodiversidad} onChange={(e) => setbiodiversidad(e.target.checked)} />
                <label htmlFor="playa">Playa</label>
                <input type="checkbox" name="playa" checked={playa} onChange={(e) => setPlaya(e.target.checked)} />
                <label htmlFor="cascada">cascada</label>
                <input type="checkbox" name="cascada" checked={cascada} onChange={(e) => setCascada(e.target.checked)} />
                <label htmlFor="termales">termales</label>
                <input type="checkbox" name="termales" checked={termales} onChange={(e) => setTermales(e.target.checked)} />
            </form>
        </aside>
    );
};