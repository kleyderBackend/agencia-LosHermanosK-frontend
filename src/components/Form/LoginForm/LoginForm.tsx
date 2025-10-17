import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { LoginSesionRegisterButton } from '../../Button/LoginSesionButton/LoginSesionButton';
import styles from './LoginForm.module.css';

interface User {
    name: string;
    email: string;
    phone: string;
    password: string;
}

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handlerLogin = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            alert('⚠️ Por favor ingrese sus datos.');
            return;
        }

        // Leer usuarios registrados
        const stored = localStorage.getItem('users');

        if (!stored) {
            alert('❌ No hay usuarios registrados.');
            return;
        }

        let users: User[] = [];

        try {
            users = JSON.parse(stored);
            if (!Array.isArray(users)) throw new Error();
        } catch {
            alert('❌ Error al leer los datos de usuarios.');
            return;
        }

        // Buscar coincidencia
        const userFound = users.find(
            (u) => u.email === email && u.password === password
        );

        if (!userFound) {
            alert('❌ Usuario o contraseña incorrectos.');
            return;
        }

        // Guardar sesión
        localStorage.setItem('loggedUser', JSON.stringify(userFound));

        alert(`✅ Bienvenido, ${userFound.name}`);
        navigate('/dashboard');
    };

    return (
        <form className={styles.loginForm} onSubmit={handlerLogin}>
            <input
                type="email"
                name="email"
                value={email}
                placeholder="Ingrese su correo electrónico"
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                name="password"
                value={password}
                placeholder="Ingrese su contraseña"
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <LoginSesionRegisterButton />
            <p>
                ¿No tienes cuenta? <NavLink to="/register">Regístrate aquí</NavLink>
            </p>
        </form>
    );
};
