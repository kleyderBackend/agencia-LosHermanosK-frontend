import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { RegisterButton } from '../../Button/RegisterButton/RegisterBotton';
import { emailRegex, passwordRegex } from '../../../utils/formatEmaiAndPassword';
import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const HandlerSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setTimeout(() => {
            console.log('registrando...')
        }, 2000)
        if (!name || !email || !phone || !password) {
            alert('Debes ingresar todos los campos');
            return;
        }
        if (!emailRegex.test(email)) {
            alert('Formato de correo incorrecto');
            return;
        }
        if (!passwordRegex.test(password)) {
            alert('La contraseña debe incluir caracteres especiales y números');
            return;
        }

        // Leer usuarios existentes
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');

        // Crear nuevo usuario
        const newUser = { name, email, phone, password };

        // Agregarlo al array
        const updatedUsers = [...existingUsers, newUser];

        // Guardar en localStorage
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        alert('✅ Usuario registrado correctamente');
        // Limpiar formulario
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
    };


    return (
        <>
            <form onSubmit={HandlerSubmit} className={styles.registerForm}>
                <input
                    type="text"
                    name='name'
                    value={name}
                    placeholder="Ingrese su nombre:"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={email}
                    placeholder='Ingrese un correo electrónico:'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    name='phone'
                    value={phone}
                    placeholder='Ingrese un número telefónico:'
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder='Ingrese una contraseña:'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <RegisterButton />
                <p>¿Ya tienes cuenta? <NavLink to="/login">Iniciar Sesión</NavLink></p>
            </form>
        </>
    );
};