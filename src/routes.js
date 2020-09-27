import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import Login from "./views/Login";
import List from "./views/List";

export default (props) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={List} />
      <Route path={"/login"} component={Login} />
      <Route path={"/content"} component={Login} />
    </Switch>
  </BrowserRouter>
);
