import React from "react";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { render } from "preact";

// root holds our app's root DOM Element:
let root;

function init() {
  root = render(<App />, document.body, root);
}
init();

// example: Re-render on Webpack HMR update:
if (module.hot) module.hot.accept("./App", init);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
