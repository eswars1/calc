import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./configureStore";
import Main from "./component/Main";

const store = configureStore();

ReactDOM.render(<Main store={store} />, document.getElementById("root"));
