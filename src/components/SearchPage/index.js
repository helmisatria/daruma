import React, { Component } from 'react';

// Components
import Header from '../Header';
import Filter from './Filter';
import ListFilter from './ListFilter';
import Footer from './Footer';

// Styles
import '../../dist/css/searchpage.css';

export default class SearchPage extends Component {
  state = {};

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="ui grid container stackable" id="search_container">
          <div className="four wide column doubling">
            <Filter />
          </div>
          <div className="eleven wide column">
            <div className="ui fluid small left icon right action input">
              <i className="search icon" />
              <input id="home_heroSearch" type="text" placeholder="Masukan nama rumah sakit atau lokasi" />
              <button className="ui button" id="search_searchBtn">
                CARI
              </button>
            </div>
            <div id="search_helpSearchText">
              <p>
                Ditemukan 27 rumah sakit untuk <b>"Rumah Sakit Borromeus"</b>
              </p>
              <p>
                Halaman <b>1</b> dari <b>1</b>
              </p>
            </div>
            <div className="ui divider" />
            <ListFilter />
            <div className="ui grid centered" id="search_paginationLabels">
              <div className="ui large labels">
                <div className="ui label search_pagination">1</div>
                <div className="ui label search_pagination">2</div>
                <div className="ui label search_pagination">3</div>
                <div className="ui label search_pagination">4</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
