import {
  SEND_USER_REQUEST,
  SEND_USER_SUCCESS,
  SEND_USER_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  UPDATE_USERS,
} from '../actions/actionsUsers';

const initialState = {
  isLoading: false,
  users: [],
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case SEND_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case SEND_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        error: null,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
      case UPDATE_USERS:
        return {
          ...state,
          loading: false,
          users: action.users,
        };
    default:
      return state;
  }
};

export default usersReducer;
