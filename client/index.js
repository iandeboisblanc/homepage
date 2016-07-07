import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRedirect} from 'react-router';
import Main from './reactComponents/Main';
import Projects from './reactComponents/Projects';
import About from './reactComponents/About';
require('./styles.css');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component = {Main}>
      <Route path='/About' component={About} />
      <Route path='/Projects' component={Projects} />
    </Route>
  </Router>
, document.getElementById('app'));