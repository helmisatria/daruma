import React, { Component } from 'react';

import { connect } from 'react-redux';

import HospitalAction from '../../reducers/HospitalRedux';

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
    data: {
      id: '',
      name: '',
      address: '',
      phone: '',
      longitude: '',
      latitude: '',
      available_class: [],
      available_room_count: 0,
      min_price: 0,
      max_price: 0,
      rooms: [],
    },
  };

  componentWillMount() {
    this.props.getHospital(this.props.match.params.id);
  }

  componentDidMount() {
    document.body.style.backgroundColor = '#ffffff';
    window.scrollTo(0, 0);
  }
  componentWillReceiveProps({ data, fetching, error }) {
    if (!fetching && !error) {
      if (data) {
        this.setState({ data });
        console.log('====================================');
        console.log(data);
        console.log('====================================');
      }
    }
  }

  listRuangan = () => {
    if (this.state.data) {
      return this.state.data.rooms.map(room => <RuanganItem key={room.id} {...room} />);
    }
  };

  render() {
    const { name } = this.state.data;

    return (
      <div>
        <Header />
        <div className="ui grid container stackable" id="detail_contentContainer">
          <div className="nine wide column">
            <Slider />
            <h2>{this.state.data.name}</h2>
            <div className="ui grid stackable">
              <div className="nine wide column">
                <p id="detail_address">{this.state.data.address}</p>
                <p id="detail_phoneTitle">NOMOR TELEPON</p>
                <span id="detail_phoneNumber">{this.state.data.phone}</span>
              </div>
              <div className="seven wide column">
                <Maps
                  lat={Number(this.state.data.latitude)}
                  lng={Number(this.state.data.longitude)}
                  isMarkerShownr
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

const mapStateToProps = state => ({
  fetching: state.Hospital.fetching,
  error: state.Hospital.error,
  message: state.Hospital.message,
  data: state.Hospital.detail,
});

const mapDispatchToProps = dispatch => ({
  getHospital: params => dispatch(HospitalAction.detailRequest(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
