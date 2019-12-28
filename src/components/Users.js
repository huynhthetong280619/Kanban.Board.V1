import React from 'react';

import CreateUserContainer from '../containers/CreateUserContainer';
import UserContainer from '../containers/UserContainer';

const Users = ({ users = [] }) => {
  return (
    <section className="Users">
      <h2>Users</h2>
      <CreateUserContainer />
      {users.map(user => (
        <UserContainer key={user} userId={user} />
      ))}
    </section>
  );
};

export default Users;
