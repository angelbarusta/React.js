import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import App from "./components/App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const MY_PHOTO = `https://gravatar.com/avatar/c9af7a938eea0a3a05b1477396e15b9f?d=identicon`;
const initialState = {
  myList: [
    {
      id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
      firstName: "Angel",
      lastName: "Barusta",
      email: "angel.barusta.95@gmail.com",
      jobTitle: "Front-end React",
      twitter: "angelbarusta",
      avatarUrl: MY_PHOTO
    }
  ]
};

//este es el store e redux
const store = createStore(reducer, initialState, composeEnhancers());
console.log("STORE", store);

const container = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
