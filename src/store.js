import { createStore } from "redux";
import chatReducer from "../src/reducers/reducers.js";

const store = createStore(chatReducer);

export default store;
