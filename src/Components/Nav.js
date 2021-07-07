import React from "react";
// import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
      <nav className="main-nav">
        <ul>
            {/* <li><NavLink to={`/cats`}>cats</NavLink></li>
            <li><NavLink to={`/dogs`}>Dogs</NavLink></li>
            <li><NavLink to={`/computers`}>Computers</NavLink></li> */}
            <li><a href="/cats">Cats</a></li>
            <li><a href="/dogs">Dogs</a></li>
            <li><a href="/computers">Computers</a></li>
        </ul>
      </nav>
  );
}

export default Nav;
