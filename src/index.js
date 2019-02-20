import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";

// eslint-disable-next-line
import "./lib/brace";
import * as serviceWorker from "./lib/serviceWorker";
import "./assets/css/main.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
