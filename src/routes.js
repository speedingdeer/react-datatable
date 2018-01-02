import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import HomeFullScreen from './containers/HomeFullScreen';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/full' component={HomeFullScreen}/>
    </Switch>
  </BrowserRouter>
)

export default Routes