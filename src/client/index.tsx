import React from "react";
import {createRoot} from "react-dom/client";
import {App} from './components/App';

const root = createRoot(document.getElementById("root"));
const app = <App/>;
root.render(app);