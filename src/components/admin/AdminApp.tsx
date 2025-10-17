import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

import { UsersList } from "./resources/Users";
import { ToursList } from "./resources/Tours";
import { BookingsList } from "./resources/Bookings";
// import { authProvider } from "./AuthProvider";

const dataProvider = simpleRestProvider("http://localhost:3000/api");

export const AdminApp = () => (
    // <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UsersList} />
        <Resource name="tours" list={ToursList} />
        <Resource name="bookings" list={BookingsList} />
    </Admin>
);
