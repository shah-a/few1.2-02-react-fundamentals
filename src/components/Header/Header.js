// import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import POPOSRandom from '../POPOSRandom/POPOSRandom.js';

function Header() {
  return (
    <div className="Header">
      <header>
        <h1 className="title">SFPOPOS</h1>
        <div className="subtitle"> San Francisco's Privately Owned Public Open Spaces</div>
        <div>
          <NavLink
            className="NavLink"
            activeClassName="NavLink-Active"
            exact
            to="/">List</NavLink>
          <NavLink
            className="NavLink"
            activeClassName="NavLink-Active"
            exact
            to="/about">About</NavLink>
        </div>
        <POPOSRandom />
      </header>
    </div>
  );
}

export default Header;
