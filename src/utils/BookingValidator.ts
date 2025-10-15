// utils/BookingValidator.ts
export interface BookingData {
    fullname: string;
    email: string;
    phone: string;
    type: 'individual' | 'tour' | '';
    dateStartTravel: string;
    quantityPeople: number;
    categoryTravel: string;
    comments: string;
    methodPay: 'credit' | 'transfer' | 'cash' | '';
}

export const validateBookingData = (data: BookingData): string | null => {
    const {
        fullname, email, phone, type,
        dateStartTravel, quantityPeople,
        categoryTravel, comments, methodPay
    } = data;

    if (!fullname.trim()) return 'El nombre completo es obligatorio.';
    if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(fullname))
        return 'El nombre solo debe contener letras.';

    if (!email.trim()) return 'El correo es obligatorio.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
        return 'El formato del correo no es válido.';

    if (!phone.trim()) return 'El teléfono es obligatorio.';
    if (!/^\d+$/.test(phone)) return 'El teléfono solo debe contener números.';
    if (phone.length < 10 || phone.length > 15)
        return 'El teléfono debe tener entre 10 y 15 dígitos.';

    if (!type || !['individual', 'tour'].includes(type))
        return 'Debe seleccionar un tipo de destino válido.';

    if (!dateStartTravel) return 'Debe seleccionar una fecha de viaje.';
    if (new Date(dateStartTravel) < new Date())
        return 'La fecha de viaje debe ser futura.';

    if (!quantityPeople || quantityPeople < 1)
        return 'Debe indicar al menos una persona.';
    if (quantityPeople > 20)
        return 'No se permiten más de 20 personas por reserva.';

    if (!categoryTravel.trim()) return 'Debe seleccionar una categoría de viaje.';

    if (comments && comments.length > 250)
        return 'El comentario no puede superar los 250 caracteres.';

    if (!methodPay || !['credit', 'transfer', 'cash'].includes(methodPay))
        return 'Debe seleccionar un método de pago válido.';

    return null; // ✅ sin errores
};
