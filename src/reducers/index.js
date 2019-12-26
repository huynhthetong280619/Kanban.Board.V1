import { combineReducers } from 'redux';

import listReducer from './list-reducer';
import cardReducer from './card-reducer';
import userReducer from './user-reducer';

export default combineReducers({
  listReducer,
  cardReducer,
  userReducer,
});
