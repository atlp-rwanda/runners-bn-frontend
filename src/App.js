import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routers/Routers';

const App = () => (
  <Router>
    <div className=" bg-gray-100">
      <Routes />
    </div>
  </Router>
);

export default App;
