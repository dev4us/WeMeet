import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Store } from "../GlobalState/store";

import About from "./About";

const LoggedOutRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={About} />
    </Switch>
  </BrowserRouter>
);

const LoggedInRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={About} />
    </Switch>
  </BrowserRouter>
);

const Routes = () => {
  const { state } = useContext(Store);

  if (state.isLoggedIn) {
    return <LoggedInRoutes />;
  } else {
    return <LoggedOutRoutes />;
  }
};

export default Routes;
