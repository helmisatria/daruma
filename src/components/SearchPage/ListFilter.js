import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../dist/images/avatar.png';

export default class ListFilter extends Component {
  state = {};

  render() {
    const { data } = this.props;

    return (
      <div className="ui link cards grid doubling four column stackable equal width">
        {data.map(({ id, name, address, phone, longitude, latitude }) => (
          <Link to="/detail" className="card column listFilterItem" key={id}>
            <div className="image">
              <img src={Avatar} />
            </div>
            <div className="content">
              <div className="header" className="listFilter_header">
                {name}
              </div>
              <div className="description" className="listFilter_desc">
                {address}
              </div>
            </div>
            <div className="extra content">
              <span className="right floated">
                <i className="user icon" /> 2.5 km
              </span>
              <span>{phone}</span>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
