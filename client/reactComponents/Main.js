import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import BackgroundCanvas from './BackgroundCanvas';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='main'>
        <BackgroundCanvas />
        <Header>
          <NavBar/>
        </Header>
        <div className='contentBody'>
          {this.props.children}
        </div>
      </div>
    );
  }

}

module.exports = Main;
