import React from "react";
import ReactDOM from "react-dom";
import Timer from "./components/timer"
import Provider from "./components/provider";
import { createStore } from "./store/createStore";
import { reducer, initialState } from "./store/reducer";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={createStore(reducer, initialState)}>
    <Timer />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
