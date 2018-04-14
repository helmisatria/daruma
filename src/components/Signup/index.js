import React, { Component } from 'react';

import '../../dist/css/signup.css';

// Components
import Forms from './Forms';

class Signup extends Component {
  state = {};

  componentWillMount = () => {
    document.body.style.backgroundColor = '#ecf5f2';
  };

  render() {
    return (
      <div id="signup_container" className="ui grid centered stackable">
        <div className="six wide column">
          <h3 id="signup_logo" className="center">
            DARUMA
          </h3>
          <div className="ui very padded segment">
            <h2 className="ui header" id="signup_header">
              Bergabunglah dengan kami sekarang juga
            </h2>

            <Forms />
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
