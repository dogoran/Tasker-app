import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginPage from './features/LoginPage';
import Tasks from './features/Tasks';

const Routes = () => (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    <Route path="/" component={Tasks} />
  </Switch>
);

export default Routes;
