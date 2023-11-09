import { combineReducers } from 'redux';
import chatsReducer from './reducerChats';
import messagesReducer from './messagesReducer';
import usersReducer from './UsersReducer';



const rootReducer = combineReducers({
  chats: chatsReducer,
  messages: messagesReducer,
  users: usersReducer
});

export default rootReducer;
