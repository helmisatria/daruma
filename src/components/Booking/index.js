import React, { Component } from 'react';

import Header from '../Header';

import '../../dist/css/booking.css';
import BCA from '../../dist/images/bca.png';
import Footer from '../DetailPage/Footer';

export default class Booking extends Component {
  state = {};

  componentDidMount() {
    document.body.style.backgroundColor = '#ffffff';
  }

  render() {
    return (
      <div>
        <Header />
        <div id="bookingContainer">
          <h2 id="title">Booking telah diproses</h2>
          <p>
            Transfer dana anda sebelum tanggal <b> 14 Februari 2018 20:10 (1 Jam)</b>
          </p>

          <div className="box">
            <span>Jumlah yang harus dibayar</span>
            <p id="harga">Rp 1.500.000,-</p>
          </div>

          <p>Silahkan transfer ke rekening dibawah ini</p>

          <div className="boxRectangle">
            <div>
              <p className="subtitle">Nomor Rekening</p>
              <span className="bold">01281083751</span>
            </div>
            <div>
              <p className="subtitle">Atas Nama</p>
              <span className="bold">01281083751</span>
            </div>
            <img src={BCA} id="logoBCA" />
          </div>

          <ul className="listSyarat">
            <li>
              Jika anda telah melakukan pembayaran, maka sistem kami otomatis akan mengkonfirmasi status pembayaran ke
              nomor handphone anda
            </li>
            <br />
            <li>Harap bawa bukti pembayaran anda saat hendak memasuki rumah sakit</li>
            <br />

            <li>booking akan dibatalkan secara otomatis</li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}
