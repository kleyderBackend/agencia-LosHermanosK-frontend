import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { LoginForm } from '../Form/LoginForm/LoginForm';
import styles from './Navbar.module.css';

export const Navbar = () => {
    const location = useLocation();
    const [showLogin, setShowLogin] = useState(false);
    const toggleLoginForm = () => {
        setShowLogin(!showLogin);
    };
    return (
        <nav className={styles.navContainer}>
            {location.pathname === '/' && (
                <button
                    className={styles.registerNavBtn}
                    type="button"
                    onClick={toggleLoginForm}
                >
                    {showLogin ? 'Cerrar' : 'Iniciar Sesión'}
                </button>
            )}
            {showLogin && (
                <div className={styles.loginFormContainer}>
                    <LoginForm />
                </div>)}
            <ul className={styles.navList}>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/destinations">Destinos</NavLink></li>
                <li><NavLink to="/about">Acerca de</NavLink></li>
                <li><NavLink to="/contact">Contacto</NavLink></li>
            </ul>
        </nav>
    );
};
