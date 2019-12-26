import { users as defaultUsers } from '../normalize-state';

const userReducer = (users = defaultUsers, action) => {
  return users;
};

export default userReducer;
