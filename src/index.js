import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename="/chatterease">
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
