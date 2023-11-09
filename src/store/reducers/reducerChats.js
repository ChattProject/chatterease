import {
  FETCH_CHATS_SUCCESS,
  FETCH_CHATS_REQUEST,
  FETCH_CHATS_FAILURE,
  SEND_CHAT_SUCCESS,
  SEND_CHAT_REQUEST,
  SEND_CHAT_FAILURE,
  UPDATE_CHATS,
} from "../actions/actionsChats";

const initialState = {
  loading: false,
  error: null,
  chats: [],
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHATS_REQUEST:
    case SEND_CHAT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CHATS_SUCCESS:
      return {
        ...state,
        loading: false,
        chats: action.chats,
      };
    case FETCH_CHATS_FAILURE:
    case UPDATE_CHATS:
      return {
        ...state,
        loading: false,
        chats: action.chats,
      };
    case SEND_CHAT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SEND_CHAT_SUCCESS:
      return {
        ...state,
        loading: false,
        chats: [...state.chats, action.payload],
      };
    default:
      return state;
  }
};

export default chatsReducer;
