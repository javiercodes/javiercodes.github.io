import React from 'react';
import LandingPage from '../pages/LandingPage';
import ResourcesPage from '../pages/ResourcesPage';
import { Switch, Route } from 'react-router-dom';

const Router = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/resources" component={ResourcesPage}/>
      </Switch>
    </>
  );
};

export default Router;
