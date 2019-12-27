import { users as defaultUsers } from '../normalize-state';
import { USER_CREATE } from '../actions/user-actions';
import { addEntity } from './_utilities';

const userReducer = (users = defaultUsers, action) => {
  if (action.type === USER_CREATE) {
    const { user, userId } = action.payload;

    return addEntity(user, userId);
  }

  return users;
};

export default userReducer;
