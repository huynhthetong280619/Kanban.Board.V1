import { cards as defaultCards } from '../normalize-state';
import { addEntity } from './_utilities';
import { CARD_CREATE, CARD_DELETE } from '../actions/card-actions';

const cardReducer = (cards = defaultCards, action) => {
  if (action.type === CARD_CREATE) {
    const { card, cardId } = action.payload;
    return addEntity(cards, card, cardId);
    // return {
    //   entities: { ...cards.entities, [cardId]: card },
    //   ids: [...cards.ids, cardId],
    // };
  }

  if (action.type === CARD_DELETE) {
    const { cardId } = action.payload;
    return addEntity(cards, cardId);
  }

  return cards;
};

export default cardReducer;
