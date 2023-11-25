import axios from 'axios';
import { fetchChatMessagesRequest, fetchChatMessagesSuccess, fetchChatMessagesFailure, addMessageRequest, addMessageSuccess, addMessageFailure } from '../actions/actionsMessages'; 

export const fetchChatMessages = (chatId) => {
  return async (dispatch) => {
    dispatch(fetchChatMessagesRequest());
    try {
      const response = await axios.get(`https://wechat-85y195m1.b4a.run/api/chats/${chatId}/messages`);
      dispatch(fetchChatMessagesSuccess(chatId, response.data));
    } catch (error) {
      dispatch(fetchChatMessagesFailure(error));
    }
  };
};

export const addMessage = (chatId, newMessage) => (dispatch) => {
  dispatch(addMessageRequest());
  fetch(`https://wechat-85y195m1.b4a.run/api/messages/`, {
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