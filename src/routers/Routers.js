/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime/runtime';
import React from 'react';
import '../App.css';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from '../components/Home';
import PageNotFound from '../components/PageNotFound';
import Requests from '../components/Requests/Requests';

export default function Routers() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Requests} />
      <Route exact path="/PageNotFound" component={PageNotFound} />
      <Redirect to="/PageNotFound" />
    </Switch>

  );
}
