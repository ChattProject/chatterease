import { ADD_CHAT, ADD_MESSAGE } from "./actionsType";

export const addChat = (chat) => {
  return {
    type: ADD_CHAT,
    payload: chat,
  };
};

export const addMessage = (chatId, message) => {
  return {
    type: ADD_MESSAGE,
    payload: { chatId, message },
  };
};
