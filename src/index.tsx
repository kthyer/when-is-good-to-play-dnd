import * as serviceWorker from "./serviceWorker";

import App from "./App";
import AppProviders from "./AppProviders";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
