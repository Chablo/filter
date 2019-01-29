import React from 'react';
import { List, Datagrid, TextField, ReferenceField, Filter, ReferenceInput, SelectInput, TextInput } from 'react-admin';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput label="Id" source="id" allowEmpty />
        <TextInput label="Title" source="title" allowEmpty />
    </Filter>
);

export const PostList = (props) => (
    <List {...props} filters={<PostFilter/>}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users"><TextField source="name" /></ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);