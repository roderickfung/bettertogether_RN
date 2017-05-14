import { combineReducers } from 'redux';
import ChatReducer from './ChatReducer';
import AuthReducer from './AuthReducer';
import UserReducer from './UserReducer';

export default combineReducers({
  // dummy reducer as placeholder
  chat: ChatReducer,
  auth: AuthReducer,
  userlist: UserReducer
});
