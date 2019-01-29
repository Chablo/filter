import React from 'react';
import { List, Datagrid, TextField, EmailField, UrlField, ReferenceField, Filter, ReferenceInput, SelectInput, TextInput } from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <TextInput label="Name" source="name" allowEmpty />
    </Filter>
);

export const UserList = props => (
    <List {...props} filters={<UserFilter/>}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <UrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);