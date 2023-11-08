import {
  addMessageRequest,
  addMessageSuccess,
  addMessageFailure,
} from '../actions/actionsNewMessage';

export const addMessage = (chatId, newMessage) => (dispatch) => {
  dispatch(addMessageRequest());
  fetch(`https://chat-service-kzyq.onrender.com/api/chats/${chatId}`, {
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