import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './css/App.css';

import Home from './Home';
import Browse from './Browse';
import NavBar from './NavBar';
import Contact from './Contact';
import Details from './Details';
import Search from './Search';



class Navigation extends Component {

  render() {
      return (
          <Router>
              <Fragment>
                  <NavBar />
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path='/browse' component={Browse} />
                      <Route path='/contact' component={Contact} />
                      <Route path='/details/:id' component={Details} />
                      <Route path='/search/:id' component={Search} />

                  </Switch>
              </Fragment>
          </Router>
      )
  }
}

export default Navigation;
