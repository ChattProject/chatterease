import {
  fetchChatMessagesRequest,
  fetchChatMessagesSuccess,
  fetchChatMessagesFailure,
} from '../actions/actionsMessages';

export const fetchChatMessages = (chatId) => (dispatch) => {
  dispatch(fetchChatMessagesRequest());
  fetch(`https://chat-service-kzyq.onrender.com/api/chats/${chatId}`)
    .then((response) => response.json())
    .then((messages) => dispatch(fetchChatMessagesSuccess(chatId, messages)))
    .catch((error) => dispatch(fetchChatMessagesFailure(error)));
};