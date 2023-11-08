import {
  fetchChatsRequest,
  fetchChatsSuccess,
  fetchChatsFailure,
} from '../actions/actionsChats';

export const fetchChats = () => (dispatch) => {
  dispatch(fetchChatsRequest());
  fetch('https://chat-service-kzyq.onrender.com/api/chats/')
    .then((response) => response.json())
    .then((chats) => dispatch(fetchChatsSuccess(chats)))
    .catch((error) => dispatch(fetchChatsFailure(error)));
};
