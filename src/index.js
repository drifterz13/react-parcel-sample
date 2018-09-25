import React from "react";
import { render } from "react-dom";
import App from "./App";
import { init } from "./api";

init();

render(<App />, document.getElementById("root"));
