import React from "react";
import HomePage from "./pages/HomePage";
import ResourcesPage from "./pages/ResourcesPage";
import ResourcePageReplacement from "./pages/ResourcePageReplacement";
import { Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <>
      <Switch>
        <Route basename={process.env.PUBLIC_URL} exact path="/">
          <HomePage />
        </Route>
        <Route basename={process.env.PUBLIC_URL} path="/resources">
          <ResourcePageReplacement />
        </Route>
        <Route basename={process.env.PUBLIC_URL} path="/blog">
          <ResourcesPage />
        </Route>
      </Switch>
    </>
  );
};

export default Router;
