// import React from 'react';
import './Title.css';
import {NavLink} from 'react-router-dom';

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>SFPOPOS</h1>
        <div className="Title-Subtitle"> San Francisco's Privately Owned Public Open Spaces</div>

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
      </header>
    </div>
  );
}

export default Title;
