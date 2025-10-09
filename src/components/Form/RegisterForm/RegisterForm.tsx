import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { RegisterButton } from '../../Button/RegisterButton/RegisterBotton';
import { emailRegex, passwordRegex } from '../../../utils/formatEmaiAndPassword';
import './RegisterForm.css'
export const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const HandlerSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !phone || !password) {
            alert('debes ingresar todos los campos');
            return;
        }
        if (!emailRegex.test(email)) {
            alert('formato de correo incorrecto');
            return;
        }
        if (!passwordRegex.test(password)) {
            alert('formato de contraseña incorrecto debe incluir caracter especial y numeros');
            return;
        }
    }
    return (
        <>
            <form onSubmit={HandlerSubmit} className='register-form'>
                <input type="text" name='name' value={name} placeholder="ingrese su nombre:" onChange={(e) => setName(e.target.value)} />
                <input type="email" name="email" value={email} placeholder='ingrese un correo electronico:' onChange={(e) => setEmail(e.target.value)} />
                <input type="tel" name='phone' value={phone} placeholder='ingrese un numero telefonico:' onChange={(e) => setPhone(e.target.value)} />
                <input type="password" name="password" value={password} placeholder='ingrese una contraseña:' onChange={(e) => setPassword(e.target.value)} />
                <RegisterButton  />
                <p>¿Ya tienes cuenta? <NavLink to='/login'>Iniciar Sesión</NavLink></p>
            </form>
        </>
    );
};