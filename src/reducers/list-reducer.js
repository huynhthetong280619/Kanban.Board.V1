import { lists as defaultLists } from '../normalize-state';
import {
  addIdToChildren,
  addEntity,
  removeIdFromChildren,
  removeEntity,
} from './_utilities';

const CARD_CREATE = 'CARD_CREATE';
const CARD_DELETE = 'CARD_DELETE';
const CARD_MOVE = 'CARD_MOVE';

const LIST_CREATE = 'LIST_CREATE';
const LIST_DELETE = 'LIST_DELETE';
// set(chainOfProperties, what you want to replace, the object)

const listReducer = (lists = defaultLists, action) => {
  // TODO: Dispatch with CARDS
  if (action.type === CARD_CREATE) {
    const { listId, cardId } = action.payload;
    return addIdToChildren(lists, listId, 'cards', cardId);
  }

  if (action.type === CARD_DELETE) {
    const { listId, cardId } = action.payload;
    return removeIdFromChildren(lists, listId, 'cards', cardId);
  }

  if (action.type === CARD_MOVE) {
    const { cardId, originalListId, destinationListId } = action.payload;
    let newState = removeIdFromChildren(lists, originalListId, 'cards', cardId);
    return addIdToChildren(newState, destinationListId, 'cards', cardId);
  }

  // TODO: Dispatch with LISTS
  if (action.type === LIST_CREATE) {
    const { list, listId } = action.payload;

    return addEntity(lists, list, listId);
  }

  if (action.type === LIST_DELETE) {
    const { listId } = action.type;

    return removeEntity(lists, listId);
  }

  return lists;
  //NOTE: HAVE A PROBLEMT WITH SCOPE IN SWITCH CASE
  // switch (action.type) {
  //   case CARD_CREATE:
  // const { listId, cardId } = action.payload;

  // return addIdToChildren(lists, listId, 'cards', cardId);
  //TODO: Version 1.0
  //const cards = lists.entities[listId].cards.concat(cardId);
  // return set(['entities', listId, 'cards'], cards, lists);
  //TODO: Version 2.0
  // const entities = { ...lists.entities };
  // entities[listId] = {
  //   ...entities[listId],
  //   cards: entities[listId].cards.concat(cardId),
  // };
  // return {
  //   ...lists,
  //   entities,
  // };
  // case LIST_CREATE:
  // const { list, listId } = action.payload;

  // return addEntity(lists, list, listId);
  // default:
  //   return lists;
  // }
};

export default listReducer;
