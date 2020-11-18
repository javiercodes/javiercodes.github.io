import React from "react";
import ContactMePage from "../pages/ContactMePage";
import LandingPage from "../pages/LandingPage";
import ResourcesPage from "../pages/ResourcesPage";
import { Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/resources" component={ResourcesPage} />
        <Route exact path="/contact" component={ContactMePage} />
      </Switch>
    </>
  );
};

export default Router;
