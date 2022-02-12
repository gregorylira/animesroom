import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
