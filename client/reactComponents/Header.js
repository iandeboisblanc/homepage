import React from 'react';

const Header = (props) => {
  return (
    <header> 
      <h1> Ian deBoisblanc </h1>
      <h2> Full-Stack Software Engineer </h2>

      <div className='headerChildren'>
        {props.children}
      </div>

    </header>
  )
}

module.exports = Header;
