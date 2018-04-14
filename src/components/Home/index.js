import React, { Component } from 'react';

// Styles
import '../../dist/css/homepage.css';

export default class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <header id="home_hero">
          <div id="home_herocontainer" className="ui grid container centered stackable">
            <div id="home_navwrapper">
              <div id="home_nav">
                <h2>DARUMA</h2>
                <div id="home_rightnav">
                  <h4>Home</h4>
                  <h4>Navigation</h4>
                  <h4>Sitemap</h4>
                </div>
              </div>
            </div>
            <div id="home_herocenter" className="eight wide column">
              <h2 id="home_heroTitle">Mencari kamar rawat inap dengan cepat dan pasti</h2>
              <div className="ui fluid huge left icon right action input" id="home_searchContainer">
                <i className="search icon" />
                <input id="home_heroSearch" type="text" placeholder="Masukan nama rumah sakit atau lokasi" />
                <button className="ui button" id="home_searchBtn">
                  CARI
                </button>
              </div>
              <p id="home_heroHelptext">
                Lanjutkan ke pencarian terakhir: <b>Rumah Sakit di Bandung</b>
              </p>
            </div>
            <div />
          </div>
        </header>
      </div>
    );
  }
}
