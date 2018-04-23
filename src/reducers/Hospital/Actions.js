/**
 * Hospital action list
 */

export const actions = {
  listRequest: (state, { params }) =>
    state.merge({
      params,

      error: false,
      fetching: true,
      message: null
    }),

  listSuccess: (state, { list }) =>
    state.merge({
      list,

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


  detailRequest: (state, { id }) =>
    state.merge({
      id,

      error: false,
      fetching: true,
      message: null
    }),

  detailSuccess: (state, { detail }) =>
    state.merge({
      detail,

      error: false,
      fetching: false,
      message: null
    }),

  detailFailure: (state, { message }) =>
    state.merge({
      error: true,
      fetching: false,
      message
    }),


  countRequest: state =>
    state.merge({
      error: false,
      fetching: true,
      message: null
    }),

  countSuccess: (state, { count }) =>
    state.merge({
      count,

      error: false,
      fetching: false,
      message: null
    }),

  countFailure: (state, { message }) =>
    state.merge({
      error: true,
      fetching: false,
      message
    }),
};

// src/reducers/Hospital/Actions.js
