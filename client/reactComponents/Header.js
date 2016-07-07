import React from 'react';

const Header = (props) => {
  return (
    <header> 
      <h1> Ian deBoisblanc </h1>
      <h2> iandeboisblanc@gmail.com </h2>

      <div className='headerChildren'>
        {props.children}
      </div>

    </header>
  )
}

module.exports = Header;
