import React, { Component } from 'react';

import '../../dist/css/filter.css';

export default class Filter extends Component {
  state = {
    value: [],
    data: [],
  };

  componentWillReceiveProps({ roomClass }) {
    this.setState({ data: roomClass });
  }

  handleChange = id => {
    const { value } = this.state;
    if (value.indexOf(id) > -1) {
      value.splice(value.indexOf(id), 1);
    } else {
      value.push(id);
    }
    this.setState({ value });
  };

  render() {
    return (
      <div className="ui grid">
        <div className="column tablet computer only">
          <div id="search_leftTitle">
            <h3>Filter</h3>
            <span id="search_resetBtn">RESET FILTER</span>
          </div>
          <h4>Kelas Kamar Tersedia</h4>
          <div id="checkbox_container">
            {this.state.data.map(room => (
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  name={room.name}
                  id={room.name}
                  checked={this.state.value[room.id]}
                  onChange={() => this.handleChange}
                />
                <label htmlFor={room.name} className="search_leftLabel">
                  {room.name}
                </label>
              </div>
            ))}
            <h4>Harga</h4>
            <div className="ui input">
              <input placeholder="Minimum harga" type="number" className="ui input filter_harga" />
            </div>
            <div className="ui input">
              <input placeholder="Maksimum harga" type="number" className="ui input filter_harga" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
