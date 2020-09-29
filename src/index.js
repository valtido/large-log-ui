import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import FetchContainer from "./containers/FetchContainer";

import store from "./store";

const component = (
  <div>
    <FetchContainer />
  </div>
);

ReactDOM.render(
  <Provider store={store}>{component}</Provider>,
  document.getElementById("container")
);
