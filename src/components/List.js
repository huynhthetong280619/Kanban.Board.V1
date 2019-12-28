import React from 'react';

import CardContainer from '../containers/CardsContainer';
import CreateCardContainer from '../containers/CreateCardContainer';

const List = ({ list = {}, removeList }) => {
  return (
    <article className="List">
      <h2>{list.title}</h2>
      <CreateCardContainer listId={list.id} />
      <div>
        {list.cards.map(cardId => (
          <CardContainer key={cardId} cardId={cardId} listId={list.id} />
        ))}
      </div>
      <button onClick={e => removeList(list.id)} className="List-remove danger">
        Remove List
      </button>
    </article>
  );
};

export default List;
