export const SEND_CHAT_REQUEST = 'SEND_CHAT_REQUEST';
export const SEND_CHAT_SUCCESS = 'SEND_CHAT_SUCCESS';
export const SEND_CHAT_FAILURE = 'SEND_CHAT_FAILURE';

export const addChatRequest = () => ({
  type: SEND_CHAT_REQUEST,
});

export const addChatSuccess = (chat) => ({
  type: SEND_CHAT_SUCCESS,
  payload: chat,
});

export const addChatFailure = (error) => ({
  type: SEND_CHAT_FAILURE,
  payload: error,
});