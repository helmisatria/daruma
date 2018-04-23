/**
 * HospitalSagas Sagas
 */

import { call, put } from 'redux-saga/effects';

import { HospitalTypes } from '../reducers/HospitalRedux';

function * list (api, action) {
  const { params } = action;

  const res = yield call(api.get.list, params);

  if (res.ok) {
    yield put({
      type: HospitalTypes.LIST_SUCCESS,
      list: res.data
    });
  } else {
    yield put({
      type: HospitalTypes.LIST_FAILURE,
      message: res.message
    });
  };
};

function * detail (api, action) {
  const { id } = action;

  const res = yield call(api.get.detail, id);

  if (res.ok) {
    yield put({
      type: HospitalTypes.DETAIL_SUCCESS,
      detail: res.data
    });
  } else {
    yield put({
      type: HospitalTypes.DETAIL_FAILURE,
      message: res.message
    });
  };
};

function * count (api, action) {
  const res = yield call(api.get.count);

  if (res.ok) {
    yield put({
      type: HospitalTypes.COUNT_SUCCESS,
      count: res.data
    });
  } else {
    yield put({
      type: HospitalTypes.COUNT_FAILURE,
      message: res.message
    });
  }
};

export const Hospital = (API) => {
  const { Hospital:api } = API;

  return {
    list: action => list(api, action),
    detail: action => detail(api, detail),
    count: action => count(api, action),
  }
};

// src/sagas/HospitalSagas.js
