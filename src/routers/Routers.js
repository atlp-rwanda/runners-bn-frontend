import React from 'react';
import '../App.css';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from '../components/Home';
import PageNotFound from '../components/PageNotFound';
import Dashboard from '../components/dashboard/Dashboard';

export default function Routers() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/PageNotFound" component={PageNotFound} />
      <Redirect to="/PageNotFound" />
    </Switch>

  );
}
