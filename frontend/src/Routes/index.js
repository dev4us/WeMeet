import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Store } from "../GlobalState/store";

import About from "./About";

// About Create Meeting
import CreateTitle from "./Create/Title";
import CreateDesc from "./Create/Description";
import CreatePhoto from "./Create/Photo";

import AllMeet from "./MyMeet/AllMeet";
import BeforeMeet from "./MyMeet/BeforeMeet";
import EndMeet from "./MyMeet/EndMeet";

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
      <Route path="/create/desc" component={CreateDesc} />
      <Route path="/create/photo" component={CreatePhoto} />
      <Route path="/myMeet/all" component={AllMeet} />
      <Route path="/myMeet/before" component={BeforeMeet} />
      <Route path="/myMeet/end" component={EndMeet} />
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
