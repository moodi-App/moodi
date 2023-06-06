import React from "react";
import {createRoot} from "react-dom/client";
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import "./styles.css"

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);