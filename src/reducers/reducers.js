import { ADD_CHAT, ADD_MESSAGE } from "../actions/actionsType.js";
import chatsList from "../json/chatList.json";

const initialState = JSON.parse(localStorage.getItem('allChats')) || chatsList;

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return [...state, action.payload];

    case ADD_MESSAGE:
      const { chatId, message } = action.payload;
      const updatedChat = {
        ...state[chatId],
        messages: [...state[chatId].messages, message],
      };

      const updatedChatsList = [...state];
      updatedChatsList[chatId] = updatedChat;

      return updatedChatsList;
    default:
      return state;
  }
};

export default chatReducer;
