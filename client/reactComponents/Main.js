import React from 'react';
import Header from './Header';
import NavBar from './NavBar';

// const server = 'http://159.203.221.124:80'; // production
// const server = 'http://192.168.1.13:8080'; // development

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      body: undefined
    };
  }

  render () {
    return (
      <div> 
        <Header/>
        <NavBar/>
        {this.props.children}
      </div>
    );
  }

}

module.exports = Main;
