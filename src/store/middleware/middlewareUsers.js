import { fetchUsersFailure, fetchUsersRequest, fetchUsersSuccess,   addUserRequest,
  addUserSuccess,
  addUserFailure, } from '../actions/actionsUsers';

export const fetchUsers = () => (dispatch) => {
  dispatch(fetchUsersRequest());
  fetch('https://wechat-85y195m1.b4a.run/api/users/')
    .then((response) => response.json())
    .then((users) => dispatch(fetchUsersSuccess(users)))
    .catch((error) => dispatch(fetchUsersFailure(error)));
};

export const addUser = (newChat) => (dispatch) => {
  dispatch(addUserRequest());
  fetch('https://wechat-85y195m1.b4a.run/api/users/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newChat),
  })
    .then((response) => response.json())
    .then((chat) => dispatch(addUserSuccess(chat)))
    .catch((error) => dispatch(addUserFailure(error)));
};