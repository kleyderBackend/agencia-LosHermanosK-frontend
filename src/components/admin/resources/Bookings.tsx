import { List, Datagrid, TextField, DateField, EmailField } from "react-admin";

export const BookingsList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="fullname" />
            <EmailField source="email" />
            <TextField source="type" />
            <DateField source="dateStartTravel" />
            <TextField source="quantityPeople" />
        </Datagrid>
    </List>
);
