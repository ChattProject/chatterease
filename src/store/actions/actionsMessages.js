export const FETCH_CHAT_MESSAGES_REQUEST = 'FETCH_CHAT_MESSAGES_REQUEST';
export const FETCH_CHAT_MESSAGES_SUCCESS = 'FETCH_CHAT_MESSAGES_SUCCESS';
export const FETCH_CHAT_MESSAGES_FAILURE = 'FETCH_CHAT_MESSAGES_FAILURE';

export const fetchChatMessagesRequest = () => ({
  type: FETCH_CHAT_MESSAGES_REQUEST,
});

export const fetchChatMessagesSuccess = (chatId, messages) => ({
  type: FETCH_CHAT_MESSAGES_SUCCESS,
  payload: { chatId, messages },
});

export const fetchChatMessagesFailure = (error) => ({
  type: FETCH_CHAT_MESSAGES_FAILURE,
  payload: error,
});