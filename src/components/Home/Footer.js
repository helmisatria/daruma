import React, { Component } from 'react';

import { Link } from 'react-router-dom';

// Styles
import '../../dist/css/home_footer.css';

export default class Footer extends Component {
  state = {};
  render() {
    return (
      <div style={{ marginBottom: '2em', backgroundColor: '#ecf5f2', paddingTop: '3.5em' }}>
        <div className="ui grid container stackable centered" id="home_footerTopContainer">
          <h3 id="home_footerTitle" className="ten wide column">
            Daftarkan diri kalian untuk mempercepat pencarian kamar suatu saat nanti
          </h3>
          <div>
            <Link to="/signup">
              <button className="ui button two wide column" id="home_daftarFooterBtn">
                DAFTAR SEKARANG
              </button>
            </Link>
          </div>
        </div>
        <div className="ui grid container stackable" id="home_footerBottom">
          <div className="ui divider" />

          <p className="seven wide column" id="home_pFooterBottom">
            Platform pemesanan kami dibuat dengan mengedepankan prinsip kesederhanaan, sehingga pemesanan bisa dilakukan
            dengan seamless dan mudah.
            <br />
            <br />
            <br />
            <br />
            © Copyright Team Jaran Goyang - 2018. All Rights Reserved
          </p>
        </div>
      </div>
    );
  }
}
