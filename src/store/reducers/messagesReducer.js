import {
  FETCH_CHAT_MESSAGES_REQUEST,
  FETCH_CHAT_MESSAGES_SUCCESS,
  FETCH_CHAT_MESSAGES_FAILURE,
  ADD_MESSAGE_REQUEST,
  ADD_MESSAGE_SUCCESS,
  ADD_MESSAGE_FAILURE,
  UPDATE_MESSAGES,
} from "../actions/actionsMessages";

const initialState = {
  loading: false,
  error: null,
  messages: [], // This array will hold the chat messages
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAT_MESSAGES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CHAT_MESSAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: action.payload.messages,
      };
    case FETCH_CHAT_MESSAGES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UPDATE_MESSAGES:
      return {
        ...state,
        loading: false,
        messages: action.payload.messages,
      };
    case ADD_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: [...state.messages, action.payload.message],
      };
    case ADD_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default messagesReducer;
