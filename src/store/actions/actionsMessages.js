export const FETCH_CHAT_MESSAGES_REQUEST = 'FETCH_CHAT_MESSAGES_REQUEST';
export const FETCH_CHAT_MESSAGES_SUCCESS = 'FETCH_CHAT_MESSAGES_SUCCESS';
export const FETCH_CHAT_MESSAGES_FAILURE = 'FETCH_CHAT_MESSAGES_FAILURE';
export const UPDATE_MESSAGES = 'UPDATE_MESSAGES';

export const ADD_MESSAGE_REQUEST = 'ADD_MESSAGE_REQUEST';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const ADD_MESSAGE_FAILURE = 'ADD_MESSAGE_FAILURE';

export const CLEAN_CHAT_MESSAGES = 'CLEAN_CHAT_MESSAGES';

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

export const updateMessages = (updatedData) => ({
  type: UPDATE_MESSAGES,
  payload: updatedData,
});

export const addMessageRequest = () => ({
  type: ADD_MESSAGE_REQUEST,
});

export const addMessageSuccess = (chatId, message) => ({
  type: ADD_MESSAGE_SUCCESS,
  payload: { chatId, message },
});

export const addMessageFailure = (error) => ({
  type: ADD_MESSAGE_FAILURE,
  payload: error,
});

export const cleanChatMessages = (messages) => ({
  type: CLEAN_CHAT_MESSAGES,
  payload: messages,
});