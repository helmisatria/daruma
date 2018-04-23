/**
 * Booking Redux
 */

import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { types } from './Booking/Types';
import { reducers } from './Booking/Reducers';
import { actions } from './Booking/Actions';

const prefix = 'BOOKING_';

const { Types, Creators } = createActions(types, { prefix });

export const BookingTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  error: false,
  fetching: false,
  message: null
});

export const reducer =
  createReducer(INITIAL_STATE, reducers(Types, actions));

// src/reducers/BookingRedux.js
