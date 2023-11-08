import {
  addChatRequest,
  addChatSuccess,
  addChatFailure,
} from '../actions/actionsNewChat';

export const addChat = (newChat) => (dispatch) => {
  dispatch(addChatRequest());
  fetch('https://chat-service-kzyq.onrender.com/api/chats/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newChat),
  })
    .then((response) => response.json())
    .then((chat) => dispatch(addChatSuccess(chat)))
    .catch((error) => dispatch(addChatFailure(error)));
};