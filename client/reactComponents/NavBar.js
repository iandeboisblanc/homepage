import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <div>
      NavBar:
      <Link to={'/Projects'}> Projects </Link> 
      <Link to={'/About'}> About </Link> 
    </div>
  )
}

module.exports = NavBar;
