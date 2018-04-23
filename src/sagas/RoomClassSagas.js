/**
 * RoomClassSagas Sagas
 */

import { call, put } from 'redux-saga/effects';

import { RoomClassTypes } from '../reducers/RoomClassRedux';

function * list (api, action) {
  const { params } = action;

  const res = yield call(api.get.list, params);

  if (res.ok) {
    yield put({
      type: RoomClassTypes.LIST_SUCCESS,
      data: res.data
    });
  } else {
    yield put({
      type: RoomClassTypes.LIST_FAILURE,
      message: res.message
    });
  };
};

export const RoomClass = (API) => {
  const { RoomClass:api } = API;

  return {
    list: action => list(api, action),
  }
};

// src/sagas/RoomClassSagas.js
