import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import BackgroundCanvas from './BackgroundCanvas';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {this.props.children}
        </ReactCSSTransitionGroup>
      </div>
    );
  }

}

module.exports = Main;
