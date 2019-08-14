
import App from './../App';
import Home from '../containers/Home';
import Hot from '../containers/Hot';
import My from '../containers/My';

import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

const RouterRoot = () => (
  <BrowserRouter>
    <App >
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/home" component={Home} />
        <Route path="/hot" component={Hot} />
        <Route path="/my" component={My} />
        <Route path="/" render={() => {return <Redirect to="/" />}} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default RouterRoot;