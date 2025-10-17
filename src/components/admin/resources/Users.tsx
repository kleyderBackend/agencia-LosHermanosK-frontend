import { List, Datagrid, TextField, EmailField, EditButton, DeleteButton } from "react-admin";

export const UsersList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="fullname" />
      <EmailField source="email" />
      <TextField source="phone" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
