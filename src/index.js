import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import faker from "faker";

import reducer from "./redux/reducers";
import gravatar from "./components/gravatar";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import App from "./components/App";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let email_random = faker.internet.exampleEmail();

const initialState = {
  myList: [
    {
      id: faker.random.uuid(),
      firstName: "Ángel",
      lastName: "Barusta",
      email: "angel.barusta.95@gmail.com",
      jobTitle: "Front-end React",
      twitter: "angelbarusta",
      avatarUrl: gravatar("angel.barusta.95@gmail.com")
    },
    {
      id: faker.random.uuid(),
      firstName: faker.internet.userName(),
      lastName: faker.name.lastName(),
      email: email_random,
      jobTitle: faker.name.jobTitle(),
      twitter: `${faker.internet.userName()}${faker.name.lastName()}`,
      avatarUrl: gravatar(email_random)
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
