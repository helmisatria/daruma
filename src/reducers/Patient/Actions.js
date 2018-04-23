/**
 * Patient action list
 */

export const actions = {
  registerRequest: (state, { params }) =>
    state.merge({
      params,

      error: false,
      fetching: true,
      message: null
    }),

  registerSuccess: (state, { data }) =>
    state.merge({
      data,

      error: false,
      fetching: false,
      message: null
    }),

  registerFailure: (state, { message }) =>
    state.merge({
      error: true,
      fetching: false,
      message
    }),


  loginRequest: (state, { params }) =>
    state.merge({
      params,

      error: false,
      fetching: true,
      message: null
    }),

  loginSuccess: (state, { data }) =>
    state.merge({
      data,

      error: false,
      fetching: false,
      message: null
    }),

  loginFailure: (state, { message }) =>
    state.merge({
      error: true,
      fetching: false,
      message
    }),
};

// src/reducers/Patient/Actions.js
