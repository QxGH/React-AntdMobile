
import App from './../App';
import Home from '../containers/Home';
import Collect from '../containers/Collect';
import My from '../containers/My';
import View from '../containers/View';
import Content from '../containers/Content';
import Redux from '../containers/Redux';
import Partake from '../components/Partake'

import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

const RouterRoot = () => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/home" component={Home} />
        <Route path="/collect" component={Collect} />
        <Route path="/my" component={My} />
        <Route path="/view" exact component={View} />
        <Route path="/view/content"  component={Content} />
        <Route path="/view/redux"  component={Redux} />
        <Route path="/view/partake"  component={Partake} />
        <Route path="/" render={() => {return <Redirect to="/" />}} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default RouterRoot;