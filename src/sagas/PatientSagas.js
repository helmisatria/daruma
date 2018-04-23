/**
 * PatientSagas Sagas
 */

import { call, put } from 'redux-saga/effects';

import { PatientTypes } from '../reducers/PatientRedux';

function * register (api, action) {
  const { params } = action;

  const res = yield call(api.post.register, params);

  if (res.ok) {
    yield put({
      type: PatientTypes.REGISTER_SUCCESS,
      data: res.data
    });
  } else {
    yield put({
      type: PatientTypes.REGISTER_FAILURE,
      message: res.message
    });
  };
}

function * login (api, action) {
  const { params } = action;

  const res = yield call(api.post.login, params);

  if (res.ok) {
    yield put({
      type: PatientTypes.LOGIN_SUCCESS,
      data: res.data
    });
  } else {
    yield put({
      type: PatientTypes.LOGIN_FAILURE,
      message: res.message
    });
  };
}

export const Patient = (API) => {
  const { Patient:api } = API;

  return {
    register: action => register(api, action),
    login: action => login(api, action),
  }
};

// src/sagas/PatientSagas.js
