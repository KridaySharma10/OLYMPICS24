import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Olympic_rings_without_rims.svg" alt="Olympics Logo" />
      </div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Players</li>
        <li>Events</li>
        <li>Medals</li>
        <li>Schedule</li>
      </ul>
    </nav>
  );
};

export default Navbar;
