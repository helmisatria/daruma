import React, { Component } from 'react';

class Forms extends Component {
  state = {};
  render() {
    return (
      <form className="ui form">
        <div className="field signup_field">
          <label className="signup_label">Nama Lengkap</label>
          <input className="signup_input" type="text" name="first-name" placeholder="Masukkan nama lengkap anda" />
        </div>
        <div className="field signup_field">
          <label className="signup_label">Email</label>
          <input className="signup_input" type="text" name="first-name" placeholder="Masukkan email anda" />
        </div>
        <div className="field signup_field">
          <label className="signup_label">Password</label>
          <input className="signup_input" type="text" name="first-name" placeholder="Masukkan password anda" />
        </div>
        <div className="field signup_field">
          <label className="signup_label">Nomor Identitas</label>
          <input className="signup_input" type="text" name="first-name" placeholder="Masukkan password anda" />
        </div>
        <div className="field signup_field">
          <label className="signup_label">Nomor Telepon</label>
          <input className="signup_input" type="text" name="first-name" placeholder="Masukkan nomor telepon anda" />
        </div>
        <div className="field signup_field">
          <label className="signup_label">Alamat</label>
          <textarea className="signup_input" rows="4" placeholder="Masukkan alamat anda" />
        </div>
        <button id="signup_submitbtn" className="fluid ui button">
          DAFTAR SEKARANG
        </button>
        <div className="ui grid container stackable centered">
          <p className="signup_notes column">
            Dengan menekan tombol "Daftar Sekarang" anda setuju dengan ketentuan dan aturan kami
          </p>
        </div>
      </form>
    );
  }
}

export default Forms;
