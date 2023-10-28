import { createStore } from "redux";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import rootReducer from "./Store/reducer/index";
import App from "./App";

const store = createStore(rootReducer);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,

);
