import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import chatReducer from './reducers/reducers.js';

const store = createStore(chatReducer, applyMiddleware(thunk));

export default store;