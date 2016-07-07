import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import BackgroundCanvas from './BackgroundCanvas';


// const server = 'http://159.203.221.124:80'; // production
// const server = 'http://192.168.1.13:8080'; // development

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
        <div id='contentBody'>
          {this.props.children}
        </div>
      </div>
    );
  }

}

module.exports = Main;
