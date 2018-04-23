/**
 * Booking action list
 */

export const actions = {
  createRequest: (state, { params }) =>
    state.merge({
      params,

      error: false,
      fetching: true,
      message: null
    }),

  createSuccess: state =>
    state.merge({
      error: false,
      fetching: false,
      message: null
    }),

  createFailure: (state, { message }) =>
    state.merge({
      error: true,
      fetching: false,
      message
    }),
};

// src/reducers/Booking/Actions.js
