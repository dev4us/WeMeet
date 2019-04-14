import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Store } from "../GlobalState/store";

import About from "./About";
import CreateTitle from "./Create/Title";
import CreatePhoto from "./Create/Photo";

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
      <Route path="/create/title" component={CreateTitle} />
      <Route path="/create/photo" component={CreatePhoto} />
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
