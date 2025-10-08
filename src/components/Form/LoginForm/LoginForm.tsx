import React, { useState } from 'react';
import { LoginSesionRegisterButton } from '../../Button/LoginSesionButton/LoginSesionButton';
import './LoginForm.css';
import { NavLink } from 'react-router-dom';


export const LoginForm = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const handlerLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (!user || !password) {
            alert(' por favor ingrese los datos');
            return;
        }
    }
    return (
        <>
            <form className='login-form' onSubmit={handlerLogin}>
                <input
                    type="text"
                    name='name'
                    value={user}
                    placeholder='ingrese su usuario'
                    onChange={(e) => setUser(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder='ingrese su contraseñá'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <LoginSesionRegisterButton />
                <p>¿No tienes cuenta? <NavLink to='/register'>Registrate aqui</NavLink>
                </p>
            </form>
        </>
    );
};