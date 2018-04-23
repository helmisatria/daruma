/**
 * BookingSagas Sagas
 */

import { call, put } from 'redux-saga/effects';

import { BookingTypes } from '../reducers/BookingRedux';

function* create(api, action) {
  const { params } = action;

  const res = yield call(api.post.create, params);

  if (res.ok) {
    yield put({
      type: BookingTypes.CREATE_SUCCESS,
    });
  } else {
    yield put({
      type: BookingTypes.CREATE_FAILURE,
      message: res.message,
    });
  }
}

export const Booking = API => {
  const { Booking: api } = API;

  return {
    create: action => create(api, action),
  };
};

// src/sagas/BookingSagas.js
