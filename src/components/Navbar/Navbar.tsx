import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className='container'>
            <ul className='nv-list'>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/destinations">Destinos</NavLink></li>
                <li><NavLink to="/about">Acerca de</NavLink></li>
                <li><NavLink to="/contact">Contacto</NavLink></li>
            </ul>
        </nav>
    );
};
