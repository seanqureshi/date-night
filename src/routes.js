import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import DateResults from './components/DateResults/DateResults';
import Finalizer from './components/Finalizer/Finalizer';
import About from './components/About/About';
import DateDesktop from './components/DateResults/DateDesktop';

export default (
  <Switch>
    <Route exact path='/' component={ Landing }/>
    <Route path='/results/:id' component={ DateResults }/>
    <Route path='/results' component={ DateResults }/>
    <Route path='/dates' component={ DateDesktop } />
    <Route path='/finalizer' component={ Finalizer }/>
    <Route path='/about' component={ About }/>
  </Switch>
);