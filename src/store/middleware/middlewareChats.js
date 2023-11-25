import axios from "axios";
import {
  fetchChatsRequest,
  fetchChatsSuccess,
  fetchChatsFailure,
  addChatRequest,
  addChatSuccess,
  addChatFailure,
} from "../actions/actionsChats";

export const fetchChats = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchChatsRequest());
      const response = await axios.get(
        "https://wechat-85y195m1.b4a.run/api/chats/"
      );
      dispatch(fetchChatsSuccess(response.data));
    } catch (error) {
      console.error("Error fetching chats:", error);
      dispatch(fetchChatsFailure(error));
    }
  };
};

export const addChat = (newChat) => (dispatch) => {
  dispatch(addChatRequest());
  fetch("https://wechat-85y195m1.b4a.run/api/chats/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newChat),
  })
    .then((response) => response.json())
    .then((chat) => dispatch(addChatSuccess(chat)))
    .catch((error) => dispatch(addChatFailure(error)));
};
