export const ADD_MESSAGE_REQUEST = 'ADD_MESSAGE_REQUEST';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const ADD_MESSAGE_FAILURE = 'ADD_MESSAGE_FAILURE';

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