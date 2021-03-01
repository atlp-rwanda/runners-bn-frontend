import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from './routers/Routers';
import NavBar from './components/NavBar';

const App = () => (
  <Router>
    <div className="container">
      <NavBar />
      <Routes />
      <h1>Barefoot Nomad</h1>
    </div>
  </Router>
);

export default App;
