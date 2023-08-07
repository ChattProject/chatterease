import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

reportWebVitals();
