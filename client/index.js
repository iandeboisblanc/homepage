import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Main from './reactComponents/Main';
import About from './reactComponents/About';
import Projects from './reactComponents/Projects';
import Contact from './reactComponents/Contact';
require('./styles.css');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component = {Main}>
      <Route key='about' name='About' path='/About' component={About} />
      <Route key='projects' name='Projects' path='/Projects' component={Projects} />
      <Route key='contact' name='Contact' path='/Contact' component={Contact} />
    </Route>
  </Router>
, document.getElementById('app'));