import React, { useState } from "react";
import styles from './BookingForm.module.css';

export const BookingForm = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [type, setType] = useState('');
    const [dateStartTravel, setDateStartTravel] = useState('');
    const [quantityPeople, setQuantityPeople] = useState(0);
    const [categoryTravel, setCategoryTravel] = useState('');
    const [comments, setComments] = useState('');
    const [methodPay, setMethodPay] = useState('');

    const handlerBooking = (e: React.FormEvent) => {
        e.preventDefault();

        // continuar con el envío si todo está correcto
    };
    return (
        <form onSubmit={handlerBooking} className={styles.formBooking}>
            <input type="text" name="fullName"
                id="input-name"
                value={fullname}
                placeholder="ingrese su nombre completo"
                onChange={(e) => setFullname(e.target.value)}
            />
            <input type="email" name="email"
                id="input-email"
                value={email}
                placeholder="ingrese su email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input type="tel" name="phone"
                id="input-phone"
                value={phone}
                placeholder="ingrese su numero celular"
                onChange={(e) => setPhone(e.target.value)}
            />
            <select
                name="type"
                className={styles.selectType}
                value={type}
                onChange={(e) => setType(e.target.value)}
            >
                <option value="individual">Destino Individual</option>
                <option value="tour">Tour</option>
            </select>
            <input type="date" name="dateStartTravel"
                id="input-dateStartTravel"
                value={dateStartTravel}
                onChange={(e) => setDateStartTravel(e.target.value)}
            />
            <input type="number" name="quantityPeople"
                id="input-quantityPeople"
                value={quantityPeople}
                onChange={(e) => setQuantityPeople(Number(e.target.value))}
            />
            <select
  name="categoryTravel"
  className={styles.selectCategory}
  value={categoryTravel}
  onChange={(e) => setCategoryTravel(e.target.value)}
>
  <option value="">Seleccione una categoría</option>
  <option value="expreso-pareja-privado">Destino viaje expreso pareja (privado)</option>
  <option value="expreso-individual-privado">Destino viaje expreso individual (privado)</option>
  <option value="pareja">Destino viaje en pareja</option>
  <option value="individual">Destino viaje individual</option>
  <option value="tour-pareja-privado">Tour en pareja expreso (privado)</option>
  <option value="tour-individual-privado">Tour viaje expreso individual (privado)</option>
  <option value="tour-pareja">Tour viaje en pareja</option>
</select>
            <input type="text" name="comment"
                id="input-comment"
                value={comments}
                placeholder="ingrese un comentario o recomendación especial"
                onChange={(e) => setComments(e.target.value)}
            />
            <fieldset className={styles.paymentOptions}>
                <legend>Método de pago</legend>
                <label>
                    <input type="radio" name="methodPay" value="credit"
                        checked={methodPay === 'credit'} onChange={(e) => setMethodPay(e.target.value)} />
                    Tarjeta de crédito
                </label>
                <label>
                    <input type="radio" name="methodPay" value="transfer"
                        checked={methodPay === 'transfer'} onChange={(e) => setMethodPay(e.target.value)} />
                    Transferencia
                </label>
                <label>
                    <input type="radio" name="methodPay" value="cash"
                        checked={methodPay === 'cash'} onChange={(e) => setMethodPay(e.target.value)} />
                    Efectivo
                </label>
            </fieldset>
        </form>
    );
};