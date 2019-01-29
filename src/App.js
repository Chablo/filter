import React, { Component } from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { PostList } from './posts';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

class App extends Component {
  render() {
    return (
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
        <Resource name="posts" list={PostList} />
      </Admin>
    );
  }
}

export default App;
