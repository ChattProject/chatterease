import {
  SEND_USER_REQUEST,
  SEND_USER_SUCCESS,
  SEND_USER_FAILURE,
} from '../actions/actionsNewUser';

const initialState = {
  isLoading: false,
  user: null,
  error: null,
};

const newUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        user: null,
        error: null,
      };
    case SEND_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
        error: null,
      };
    case SEND_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default newUserReducer;
