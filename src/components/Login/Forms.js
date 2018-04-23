import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Forms extends Component {
  state = {};
  render() {
    return (
      <form className="ui form">
        <div className="field signup_field">
          <label className="signup_label">Email</label>
          <input className="signup_input" type="text" name="first-name" placeholder="Masukkan email anda" />
        </div>
        <div className="field signup_field">
          <label className="signup_label">Password</label>
          <input className="signup_input" type="text" name="first-name" placeholder="Masukkan password anda" />
        </div>
        <button id="signup_submitbtn" className="fluid ui button">
          SIGN IN
        </button>
        <div className="ui grid container stackable centered">
          <p className="signup_notes column">
            Belum punya akun? <Link to="/signup">Daftar</Link>
          </p>
        </div>
      </form>
    );
  }
}

export default Forms;
