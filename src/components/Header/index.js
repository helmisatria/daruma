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
            <Link to="/">
              <h2 id="header_logo">DARUMA</h2>
            </Link>
            <div id="header_navItems">
              <h4>Home</h4>
              <h4>Navigation</h4>
              <h4>Sitemap</h4>
              <div id="header_navAuthItems">
                <Link to="/signup">
                  <h4 id="header_registerBtn">REGISTER</h4>
                </Link>
                <h4>LOGIN</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
