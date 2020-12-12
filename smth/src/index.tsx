import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "typeface-roboto";

import "./components/css/index.css";

import { App } from "./components/App";

import { store } from "./store/store";
import { logger } from "./components/modules/Logger";

import reportWebVitals from "./reportWebVitals";

const rerenderEntireTree = (state: object): void | never => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App {...{ ...state, logger }} />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

store.subscribe(() => {
  rerenderEntireTree({
    ...store.getState(),
    actionCreator: store["actionCreator"],
  });
});

rerenderEntireTree({
  ...store.getState(),
  actionCreator: store["actionCreator"],
});

reportWebVitals();

export { store };
