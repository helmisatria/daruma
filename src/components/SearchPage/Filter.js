import React from 'react';

import '../../dist/css/filter.css';

export default () => (
  <div className="ui grid">
    <div className="column tablet computer only">
      <div id="search_leftTitle">
        <h3>Filter</h3>
        <span id="search_resetBtn">RESET FILTER</span>
      </div>
      <h4>Kelas Kamar Tersedia</h4>
      <div id="checkbox_container">
        <div className="ui checkbox">
          <input type="checkbox" name="vvip" id="vvip" />
          <label htmlFor="vvip" className="search_leftLabel">
            VVIP
          </label>
        </div>
        <div className="ui checkbox">
          <input type="checkbox" name="vip" id="vip" />
          <label htmlFor="vip" className="search_leftLabel">
            VIP
          </label>
        </div>
        <div className="ui checkbox">
          <input type="checkbox" name="utama" id="utama" />
          <label htmlFor="utama" className="search_leftLabel">
            Utama
          </label>
        </div>
        <div className="ui checkbox">
          <input type="checkbox" name="kelas1" id="kelas1" />
          <label htmlFor="kelas1" className="search_leftLabel">
            Kelas I
          </label>
        </div>
        <div className="ui checkbox">
          <input type="checkbox" name="kelas2" id="kelas2" />
          <label htmlFor="kelas2" className="search_leftLabel">
            Kelas II
          </label>
        </div>
        <div className="ui checkbox">
          <input type="checkbox" name="kelas3" id="kelas3" />
          <label htmlFor="kelas3" className="search_leftLabel">
            Kelas III
          </label>
        </div>
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
