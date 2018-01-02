import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Demo from './containers/Demo';
import DemoFullScreen from './containers/DemoFullScreen';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/demo' component={Demo}/>
      <Route exact path='/demo-full-screen' component={DemoFullScreen}/>
    </Switch>
  </BrowserRouter>
)

export default Routes