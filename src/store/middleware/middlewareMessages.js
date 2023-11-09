import axios from 'axios';
import { fetchChatMessagesRequest, fetchChatMessagesSuccess, fetchChatMessagesFailure, addMessageRequest, addMessageSuccess, addMessageFailure } from '../actions/actionsMessages'; 

export const fetchChatMessages = (chatId) => {
  return async (dispatch) => {
    dispatch(fetchChatMessagesRequest());
    try {
      const response = await axios.get(`https://chat-service-kzyq.onrender.com/api/chats/${chatId}/messages`);
      dispatch(fetchChatMessagesSuccess(chatId, response.data));
    } catch (error) {
      dispatch(fetchChatMessagesFailure(error));
    }
  };
};

export const addMessage = (chatId, newMessage) => (dispatch) => {
  dispatch(addMessageRequest());
  fetch(`https://chat-service-kzyq.onrender.com/api/messages/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newMessage),
  })
    .then((response) => response.json())
    .then((message) => dispatch(addMessageSuccess(chatId, message)))
    .catch((error) => dispatch(addMessageFailure(error)));
};