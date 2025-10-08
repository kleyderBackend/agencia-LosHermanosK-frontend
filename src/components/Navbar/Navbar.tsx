import { NavLink, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { LoginForm } from '../Form/LoginForm/LoginForm';
import './Navbar.css';

export const Navbar = () => {
    const location = useLocation();
    const [showLogin, setShowLogin] = useState(false);
    const toggleLoginForm = () => {
        setShowLogin(!showLogin);
    };
    return (
        <nav className='container'>
            {location.pathname === '/' && (
                <button
                    className="register-nav-btn"
                    type="button"
                    onClick={toggleLoginForm}
                >
                    {showLogin ? 'Cerrar' : 'Iniciar Sesión'}
                </button>
            )}
            {showLogin && (
                <div className="login-form-container">
                    <LoginForm />
                </div>)}
            <ul className='nv-list'>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/destinations">Destinos</NavLink></li>
                <li><NavLink to="/about">Acerca de</NavLink></li>
                <li><NavLink to="/contact">Contacto</NavLink></li>
            </ul>
        </nav>
    );
};
