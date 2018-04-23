/**
 * Hospital Redux
 */

import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { types } from './Hospital/Types';
import { reducers } from './Hospital/Reducers';
import { actions } from './Hospital/Actions';

const prefix = 'HOSPITAL_';

const { Types, Creators } = createActions(types, { prefix });

export const HospitalTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  error: false,
  fetching: false,
  message: null
});

export const reducer =
  createReducer(INITIAL_STATE, reducers(Types, actions));

// src/reducers/HospitalRedux.js
