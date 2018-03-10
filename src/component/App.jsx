import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './css/App.css';

import Home from './Home';


class Navigation extends Component {

  render() {
      return (
          <Router>
              <Fragment>
                  <h1>Selfie Stop</h1>
                  {/* <Navbar /> */}
                  <Switch>
                      <Route exact path="/" component={Home} />
                      {/* <Route path="/login" component={Login} />
                      <Route path="/logout" component={Logout} />
                      <Route path="/blog/:id?" component={Blog} />
                      <Route path="/donate" component={Donate} />
                      <Route path="/thanks" component={Thank} />
                      <Route path='/contact' component={Contact} /> */}
                      {/* <PrivateRoute path="/admin/home" component={Admin} />
                      <PrivateRoute path="/admin/createPost" component={Create} />
                      <PrivateRoute path="/admin/edit/:id" component={Edit} /> */}
                  </Switch>
              </Fragment>
          </Router>
      )
  }
}

export default Navigation;
