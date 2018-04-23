/**
 * RoomClass action list
 */

export const actions = {
  listRequest: state =>
    state.merge({
      error: false,
      fetching: true,
      message: null
    }),

  listSuccess: (state, { data }) =>
    state.merge({
      data,

      error: false,
      fetching: false,
      message: null
    }),

  listFailure: (state, { message }) =>
    state.merge({
      error: true,
      fetching: false,
      message
    }),
};

// src/reducers/RoomClass/Actions.js
