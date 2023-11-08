import axios from 'axios';

export const FETCH_CHATS_SUCCESS = 'FETCH_CHATS_SUCCESS';

export const fetchChatsSuccess = (chats) => ({
  type: FETCH_CHATS_SUCCESS,
  chats,
});

export const fetchChats = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://chat-service-kzyq.onrender.com/api/chats/');
      dispatch(fetchChatsSuccess(response.data));
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };
};

