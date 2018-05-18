import React, { Component } from 'react';

import { connect } from 'react-redux';

// Components
import Header from '../Header';
import Filter from './Filter';
import ListFilter from './ListFilter';
import Footer from './Footer';

import HospitalAction from '../../reducers/HospitalRedux';
import RoomAction from '../../reducers/RoomClassRedux';
import { Link } from 'react-router-dom';

// Styles
import '../../dist/css/searchpage.css';

class SearchPage extends Component {
  state = {
    data: [],
    roomClass: [],
    query: '',
    current: '',
  };

  componentWillMount = () => {
    this.props.getList({
      whereLike: {
        name: this.props.match.params.query,
      },
    });
    this.props.getRoomClass();
    this.setState({ query: this.props.match.params.query })
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  componentWillReceiveProps(nextProps) {
    const { hospital, roomClass } = nextProps
    const { query } = nextProps.match.params
    if (query !== this.state.query) {
      this.props.getList({
        whereLike: {
          name: query
        }
      })
      this.setState({ query })
    }
    if (!hospital.fetching && !hospital.error) {
      this.setState({ data: hospital.data });
    }
    if (!roomClass.fetching && !roomClass.error) {
      this.setState({ roomClass: roomClass.data });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className="ui grid container stackable" id="search_container">
          <div className="four wide column doubling">
            <Filter roomClass={this.state.roomClass} />
          </div>
          <div className="eleven wide column">
            <div className="ui fluid small left icon right action input">
              <i className="search icon" />
              <input id="home_heroSearch" type="text" placeholder="Masukan nama rumah sakit atau lokasi" value={this.state.current} onChange={(event) => {this.setState({ current: event.target.value })}}/>
              <Link to={"/search/" + this.state.current} className="ui button" id="home_searchBtn">
                CARI
              </Link>
            </div>
            <div id="search_helpSearchText">
              <p>
                Ditemukan {this.state.data.length} rumah sakit untuk 
                <b>"{this.state.query}"</b>
              </p>
              <p>
                Halaman <b>1</b> dari <b>1</b>
              </p>
            </div>
            <div className="ui divider" />
            <ListFilter data={this.state.data} />
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

const mapStateToProps = state => ({
  hospital: {
    fetching: state.Hospital.fetching,
    error: state.Hospital.error,
    message: state.Hospital.message,
    data: state.Hospital.list,
  },
  roomClass: {
    fetching: state.RoomClass.fetching,
    error: state.RoomClass.error,
    message: state.RoomClass.message,
    data: state.RoomClass.data,
  },
});

const mapDispatchToProps = dispatch => ({
  getList: params => dispatch(HospitalAction.listRequest(params)),
  getRoomClass: params => dispatch(RoomAction.listRequest(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
