import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <nav>
        <Link className='navItem' activeClassName='active' to={'/Projects'}> Projects </Link> 
        <Link className='navItem' activeClassName='active' to={'/About'}> About </Link> 
      </nav>
    )
  }
}

module.exports = NavBar;
