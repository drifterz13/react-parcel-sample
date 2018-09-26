import React, { render } from "preact";
import App from "./App";
import { init } from "./api";

init();

render(<App />, document.getElementById("root"));
