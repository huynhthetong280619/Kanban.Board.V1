import React from 'react';

import CreateList from './CreateList';
import ListsContainer from '../containers/ListsContainer';
import UsersContainer from '../containers/UsersContainer';

const Application = () => {
  return (
    <main className="Application">
      <UsersContainer />
      <section>
        <CreateList />
        <ListsContainer />
      </section>
    </main>
  );
};

export default Application;
