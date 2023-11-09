import { combineReducers } from 'redux';
import chatsReducer from './reducerChats';
import messagesReducer from './messagesReducer';
import newUserReducer from './newUserReducer';


const rootReducer = combineReducers({
  chats: chatsReducer,
  messages: messagesReducer,
  user: newUserReducer,
  // Other reducers for different parts of your application state
});

export default rootReducer;
