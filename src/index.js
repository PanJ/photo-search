import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router } from "react-router-dom";
import promiseMiddleware from "redux-promise-middleware";
import reducers from "./reducers";
import Routes from "./Routes";
import "antd/dist/antd.css";
import * as serviceWorker from "./serviceWorker";

const store = createStore(reducers, applyMiddleware(promiseMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
