import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";

export default (props) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exect={true} component={App}></Route>
    </Switch>
  </BrowserRouter>
);
