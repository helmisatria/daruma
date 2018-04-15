import React from 'react';

import '../../dist/css/ruanganitem.css';

export default () => (
  <div>
    <div id="ruanganitem_container">
      <div id="ruanganitem_left">
        <div id="ruanganitem_leftTop">
          <span id="ruanganitem_kelasTitle">Kelas VVIP</span>
          <a className="ui grey circular label small">2</a>
        </div>
        <span id="ruanganitem_price">Rp 700.000,- /malam</span>
      </div>
      <button className="ui button" id="ruanganitem_btnBook">
        BOOK
      </button>
    </div>
    <div className="ui divider" />
  </div>
);
