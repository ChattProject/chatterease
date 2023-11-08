import {
  addUserRequest,
  addUserSuccess,
  addUserFailure,
} from '../actions/actionsNewUser';

export const addUser = (newChat) => (dispatch) => {
  dispatch(addUserRequest());
  fetch('https://chat-service-kzyq.onrender.com/api/users/', {
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