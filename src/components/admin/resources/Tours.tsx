import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from "react-admin";

export const ToursList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="category" />
            <DateField source="dateStart" />
            <TextField source="price" />
            <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);
