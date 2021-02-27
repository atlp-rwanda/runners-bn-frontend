import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h2>Barefoot Nomad</h2>
        </div>
        <div className="navlinks">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
