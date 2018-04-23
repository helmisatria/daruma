/**
 * Beasiswa Kita main sagas
 */

import { takeLatest, all } from 'redux-saga/effects';

import { apiCreate } from '../services';

// Redux types
import { RoomClassTypes } from '../reducers/RoomClassRedux';
import { PatientTypes } from '../reducers/PatientRedux';
import { BookingTypes } from '../reducers/BookingRedux';
import { HospitalTypes } from '../reducers/HospitalRedux';

// Sagas functions
import { RoomClass } from './RoomClassSagas';
import { Patient } from './PatientSagas';
import { Booking } from './BookingSagas';
import { Hospital } from './HospitalSagas';

const api = apiCreate();

export default function * root () {
  yield all([
    // Hospital
    takeLatest(
      HospitalTypes.LIST_REQUEST,
      Hospital(api).list
    ),

    takeLatest(
      HospitalTypes.DETAIL_REQUEST,
      Hospital(api).detail
    ),

    takeLatest(
      HospitalTypes.COUNT_REQUEST,
      Hospital(api).count
    ),

    // Booking
    takeLatest(
      BookingTypes.CREATE_REQUEST,
      Booking(api).create
    ),

    // Room Class
    takeLatest(
      RoomClassTypes.LIST_REQUEST,
      RoomClass(api).list
    ),

    // Patient
    takeLatest(
      PatientTypes.REGISTER_REQUEST,
      Patient(api).register
    ),

    takeLatest(
      PatientTypes.LOGIN_REQUEST,
      Patient(api).login
    ),
  ]);
}

// src/sagas/index.js
