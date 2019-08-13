
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
 
import App from './../App';
import Home from '../containers/Home';
 
const RouterRoot = () => (
  <App>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route render={() => <Redirect to="/" />} />
    </Switch>
  </App>
);

export default RouterRoot;