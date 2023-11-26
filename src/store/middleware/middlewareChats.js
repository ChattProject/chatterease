import axios from 'axios';
import {
  fetchChatsRequest,
  fetchChatsSuccess,
  fetchChatsFailure,
  addChatRequest,
  addChatSuccess,
  addChatFailure,
} from '../actions/actionsChats';

export const fetchChats = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchChatsRequest());
      const response = await axios.get('https://wechat-85y195m1.b4a.run/api/chats/');
      dispatch(fetchChatsSuccess(response.data));
    } catch (error) {
      if (error.response) {
        dispatch(fetchChatsFailure(error.response.data));
      } else if (error.request) {
        dispatch(fetchChatsFailure('Сервер не відповідає'));
      } else {
        dispatch(fetchChatsFailure('Помилка запиту'));
      }
    }
  };
};

export const addChat = (newChat) => (dispatch) => {
  dispatch(addChatRequest());
  axios.post('https://wechat-85y195m1.b4a.run/api/chats/', JSON.stringify(newChat), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      dispatch(addChatSuccess(response.data));
    })
    .catch((error) => {
      if (error.response) {
        dispatch(addChatFailure(error.response.data));
      } else if (error.request) {
        dispatch(addChatFailure('Сервер не відповідає'));
      } else {
        dispatch(addChatFailure('Помилка запиту'));
      }
    });
};