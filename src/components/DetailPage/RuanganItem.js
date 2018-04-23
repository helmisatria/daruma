import React from 'react';
import { Link } from 'react-router-dom';

import '../../dist/css/ruanganitem.css';

export default ({ available_count, id, name, price }) => (
  <div>
    <div id="ruanganitem_container">
      <div id="ruanganitem_left">
        <div id="ruanganitem_leftTop">
          <span id="ruanganitem_kelasTitle">Kelas {name}</span>
          <a className="ui grey circular label small">{available_count}</a>
        </div>
        <span id="ruanganitem_price">Rp {price}.000,- /malam</span>
      </div>
      <Link to="/booking">
        <button className="ui button" id="ruanganitem_btnBook">
          BOOK
        </button>
      </Link>
    </div>
    <div className="ui divider" />
  </div>
);
