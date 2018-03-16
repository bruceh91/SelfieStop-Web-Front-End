import React, { Component } from 'react';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';

class NavBar extends Component {
      constructor(props){
          super(props)

          this.state = {
                value: ''
          }

          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
          this.setState({value: event.target.value});
          console.log(this.state.value)
      }

      handleSubmit(event) {
          event.preventDefault();
          window.location = (`${window.location.host}/search/${this.state.value}`);
          console.log(`${window.location.host}/search/${this.state.value}`)
      }



    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom box-shadow">
                    <a className="navbar-brand">
                        <img src={logo} className="p-absolute" width="50" height="50" alt="logo" />
                    </a>
                    <a className="navbar-brand home" href="/">Selfie Stop</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/browse">Browse</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="../contact">Contact</a>
                            </li>
                        </ul>


                        <span className="navbar-text mr-4 pr-6">
                            Selfie Stop the stop for all selfies
                        </span>

                        <div className="mr-4"></div>


                    </div>
                </nav>
        )
    }
}

export default NavBar;