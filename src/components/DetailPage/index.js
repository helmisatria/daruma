import React, { Component } from 'react';

import { connect } from 'react-redux';

// Components
import Header from '../Header';
import Slider from './Slider';
import Footer from './Footer';

// Styles
import '../../dist/css/detail.css';

// Components
import RuanganItem from './RuanganItem';
import Maps from '../Maps';

class DetailPage extends Component {
  state = {
    kamar: [0, 0, 0, 0],
  };

  componentDidMount() {
    document.body.style.backgroundColor = '#ffffff';
    window.scrollTo(0, 0);
  }

  listRuangan() {
    return this.state.kamar.map(kamar => <RuanganItem />);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="ui grid container stackable" id="detail_contentContainer">
          <div className="nine wide column">
            <Slider />
            <h2>RS Santo Borromeus</h2>
            <div className="ui grid stackable">
              <div className="nine wide column">
                <p id="detail_address">Jl. Ir. H.Djuanda No.100, Lebakgede, Coblong, Kota Bandung, Jawa Barat 40132</p>
                <p id="detail_phoneTitle">NOMOR TELEPON</p>
                <span id="detail_phoneNumber">(022) 2552000</span>
              </div>
              <div className="seven wide column">
                <Maps
                  lat={-6.979596099999999}
                  lng={107.631014}
                  isMarkerShown
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDt3baW8f_uCjuZVQyvNmL8AwB-YlWS9Ic&v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: '100%' }} />}
                  containerElement={<div style={{ height: '200px' }} />}
                  mapElement={<div style={{ height: '100%' }} />}
                />
                <button className="ui button fluid" id="detail_directionBtn">
                  DAPATKAN PETUNJUK JALAN
                </button>
              </div>
            </div>
          </div>
          <div className="six wide column" id="detail_rightPane">
            <h3 id="detail_rightPaneTitle">Kamar Tersedia</h3>
            {this.listRuangan()}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
