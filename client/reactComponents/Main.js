import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import BackgroundCanvas from './BackgroundCanvas';
import { RouteTransition } from 'react-router-transition';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className='main'>
        <BackgroundCanvas />
        <Header/>
        <NavBar/>
        <RouteTransition
        pathname={this.props.location.pathname}
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}>
          {this.props.children}
        </RouteTransition>
      </div>
    );
  }

}

module.exports = Main;
