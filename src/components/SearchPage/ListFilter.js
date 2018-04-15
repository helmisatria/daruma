import React, { Component } from 'react';

import Avatar from '../../dist/images/avatar.png';

export default class ListFilter extends Component {
  state = {
    data: [0, 0, 0, 0, 0, 0, 0, 0],
  };
  render() {
    return (
      <div className="ui link cards grid doubling four column stackable equal width">
        {this.state.data.map(data => (
          <div className="card column listFilterItem">
            <div className="image">
              <img src={Avatar} />
            </div>
            <div className="content">
              <div className="header" className="listFilter_header">
                Matt Giampietro
              </div>
              <div className="description" className="listFilter_desc">
                Jl. Ir. H.Djuanda No.100, Lebakgede, Bandung
              </div>
            </div>
            <div className="extra content">
              <span className="right floated">
                <i className="user icon" /> 2.5 km
              </span>
              <span>(022) 2552000</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
