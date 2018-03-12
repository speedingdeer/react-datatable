import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Demo from './containers/Demo';
import DemoFullScreen from './containers/DemoFullScreen';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
      <Route exact path={`${process.env.PUBLIC_URL}/demo`} component={Demo}/>
      <Route exact path={`${process.env.PUBLIC_URL}/demo-full-screen`} component={DemoFullScreen}/>
    </Switch>
  </BrowserRouter>
)

export default Routes