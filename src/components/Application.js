import React from 'react';

import ListsContainer from '../containers/ListsContainer';
import UsersContainer from '../containers/UsersContainer';
import CreateListContainer from '../containers/CreateListContainer';

const Application = () => {
  return (
    <main className="Application">
      <UsersContainer />
      <section>
        <CreateListContainer />
        <ListsContainer />
      </section>
    </main>
  );
};

export default Application;
