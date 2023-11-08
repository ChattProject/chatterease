import axios from 'axios';
import { FETCH_CHATS_SUCCESS } from '../actions/actionsChats';
const initialState = {
  chats: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHATS_SUCCESS:
      return {
        ...state,
        chats: action.chats,
      };
    default:
      return state;
  }
};

export default chatReducer;
