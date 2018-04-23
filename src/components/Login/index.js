import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import '../../dist/css/signup.css';

// Components
import Forms from './Forms';

class Login extends Component {
  state = {};

  componentWillMount = () => {
    document.body.style.backgroundColor = '#ecf5f2';
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div id="signup_container" className="ui grid centered stackable">
        <div className="six wide column">
          <Link to="/">
            <h3 id="signup_logo" className="center">
              DARUMA
            </h3>
          </Link>
          <div className="ui very padded segment">
            <h2 className="ui header" id="signup_header">
              Sign In to Daruma
            </h2>
            <Forms />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
