import type { user } from './types';

const authProvider = {
    login: ({ username, password }: { username: string; password: string }) => {
        const users: userser[] = JSON.parse(localStorage.getItem('users') || '[]');

        // Verificar usuario registrado
        const userFound = users.find(
            (u) => u.email === username && u.password === password
        );

        if (userFound || (username === 'admin@mail.com' && password === 'admin123')) {
            localStorage.setItem('auth', JSON.stringify({ username }));
            return Promise.resolve();
        }

        return Promise.reject('Credenciales inválidas');
    },

    logout: async (): Promise<void> => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },

    checkAuth: async (): Promise<void> => {
        return localStorage.getItem('auth') ? Promise.resolve() : Promise.reject();
    },

    checkError: async (): Promise<void> => Promise.resolve(),

    getPermissions: async (): Promise<void> => Promise.resolve(),
};

export default authProvider;
