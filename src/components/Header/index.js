import React, { Component } from 'react';

import { Link } from 'react-router-dom';

// Styles
import '../../dist/css/header.css';

export default class Header extends Component {
  state = {};
  render() {
    return (
      <div className="ui segment stackable">
        <div className="ui container">
          <div id="header_navContainer">
            <Link to="/" className="hideMobile">
              <h2 id="header_logo">DARUMA</h2>
            </Link>
            <div id="header_navItems">
              <Link className="hideMobile" to="/">
                <h4>Home</h4>
              </Link>
              <h4 className="hideMobile">Navigation</h4>
              <h4 className="hideMobile">Sitemap</h4>
              <div id="header_navAuthItems">
                <Link to="/signup">
                  <h4 id="header_registerBtn">REGISTER</h4>
                </Link>
                <Link to="/login">
                  <h4>LOGIN</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
