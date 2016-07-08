import React from 'react';
import { Link } from 'react-router';

const NavBar = (props) => {
  return (
    <nav>
      <span className='navItem'>
        <Link to={'/Projects'}> Projects </Link> 
      </span>
      <span className='navItem'>
        <Link to={'/About'}> About </Link> 
      </span>
    </nav>
  )
}

module.exports = NavBar;
