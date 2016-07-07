import React from 'react';
import { Link } from 'react-router';

const NavBar = (props) => {
  return (
    <nav>
      NavBar:
      <Link to={'/Projects'}> Projects </Link> 
      <Link to={'/About'}> About </Link> 
    </nav>
  )
}

module.exports = NavBar;
