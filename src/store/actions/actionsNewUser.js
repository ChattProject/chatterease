export const SEND_USER_REQUEST = 'SEND_USER_REQUEST';
export const SEND_USER_SUCCESS = 'SEND_USER_SUCCESS';
export const SEND_USER_FAILURE = 'SEND_USER_FAILURE';

export const addUserRequest = () => ({
  type: SEND_USER_REQUEST,
});

export const addUserSuccess = (user) => ({
  type: SEND_USER_SUCCESS,
  payload: user,
});

export const addUserFailure = (error) => ({
  type: SEND_USER_FAILURE,
  payload: error,
});