import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "bulma/css/bulma.min.css";

import "./styles.scss";
import App from "./resources";

const root = document.getElementById("root");

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  root
);
