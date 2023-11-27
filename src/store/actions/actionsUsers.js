export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const UPDATE_USERS = 'UPDATE_USERS';

export const SEND_USER_REQUEST = 'SEND_USER_REQUEST';
export const SEND_USER_SUCCESS = 'SEND_USER_SUCCESS';
export const SEND_USER_FAILURE = 'SEND_USER_FAILURE';

export const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const updateUsers = (updatedData) => ({
  type: UPDATE_USERS,
  payload: updatedData,
});

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