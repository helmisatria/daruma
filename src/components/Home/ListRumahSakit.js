import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Avatar from '../../dist/images/avatar.png';

// Styles
import '../../dist/css/listrumahsakit.css';

export default class ListRumahSakit extends Component {
  state = {};

  listRumahSakit() {
    return (
      <div className="ui link four stackable cards">
        {this.props.data.map(data => (
          <NavLink className="card column" to="/detail" key={data.phone}>
            <div className="image">
              <img src={Avatar} />
            </div>
            <div className="content">
              <div className="header">{data.nama}</div>
              <div className="description">{data.address}</div>
            </div>
            <div className="extra content">
              <span className="right floated">2.5 km</span>
              <span>
                <i className="user icon" />
                {data.phone}
              </span>
            </div>
          </NavLink>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div id="home_listContainer" className="ui grid container">
        <h2 id="home_listTitle">Rumah Sakit Terdekat</h2>
        {this.listRumahSakit()}
        <NavLink to="/search">
          <button className="ui button" id="home_lihatBtn">
            LIHAT LEBIH BANYAK
          </button>
        </NavLink>
      </div>
    );
  }
}
