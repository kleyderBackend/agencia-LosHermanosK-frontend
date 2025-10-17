import { Admin, Resource, ListGuesser } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';
import authProvider from './AuthProvider'; // 👈 importa el authProvider

const dataProvider = fakeDataProvider({
    users: [{ id: 1, name: 'Kleyder', email: 'admin@mail.com', password: 'admin123' }],
    tours: [{ id: 1, title: 'Tour Caribe', price: 200 }],
});

export const DashboardAdmin = () => (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="users" list={ListGuesser} />
        <Resource name="tours" list={ListGuesser} />
    </Admin>
);
