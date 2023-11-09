
export const FETCH_CHATS_SUCCESS = 'FETCH_CHATS_SUCCESS';
export const FETCH_CHATS_REQUEST = 'FETCH_CHATS_REQUEST';
export const FETCH_CHATS_FAILURE = 'FETCH_CHATS_FAILURE';
export const RESET_CHATS = 'RESET_CHATS';
export const UPDATE_CHATS = 'UPDATE_CHATS';

export const SEND_CHAT_REQUEST = 'SEND_CHAT_REQUEST';
export const SEND_CHAT_SUCCESS = 'SEND_CHAT_SUCCESS';
export const SEND_CHAT_FAILURE = 'SEND_CHAT_FAILURE';

export const resetChats = () => ({
  type: RESET_CHATS,
});

export const fetchChatsSuccess = (chats) => ({
  type: FETCH_CHATS_SUCCESS,
  chats,
});

export const fetchChatsRequest = () => ({
  type: FETCH_CHATS_REQUEST,
});

export const fetchChatsFailure = (error) => ({
  type: FETCH_CHATS_FAILURE,
  payload: error,
});

export const updateChats = (updatedData) => ({
  type: UPDATE_CHATS,
  payload: updatedData,
});


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