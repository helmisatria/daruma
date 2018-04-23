/**
 * RoomClass Redux
 */

import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { types } from './RoomClass/Types';
import { reducers } from './RoomClass/Reducers';
import { actions } from './RoomClass/Actions';

const prefix = 'ROOM_CLASS_';

const { Types, Creators } = createActions(types, { prefix });

export const RoomClassTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  error: false,
  fetching: false,
  message: null
});

export const reducer =
  createReducer(INITIAL_STATE, reducers(Types, actions));

// src/reducers/RoomClassRedux.js
