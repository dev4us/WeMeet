import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./About";

const RouteSet = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={About} />
    </Switch>
  </BrowserRouter>
);

const Routes = () => {
  return <RouteSet />;
};

export default Routes;
