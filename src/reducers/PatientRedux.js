/**
 * Patient Redux
 */

import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { types } from './Patient/Types';
import { reducers } from './Patient/Reducers';
import { actions } from './Patient/Actions';

const prefix = 'PATIENT_';

const { Types, Creators } = createActions(types, { prefix });

export const PatientTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  error: false,
  fetching: false,
  message: null
});

export const reducer =
  createReducer(INITIAL_STATE, reducers(Types, actions));

// src/reducers/PatientRedux.js
