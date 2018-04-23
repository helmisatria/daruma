/**
 * Booking reducer list
 */

export const reducers = (types, actions) => ({
  [types.CREATE_REQUEST]: actions.createRequest,
  [types.CREATE_SUCCESS]: actions.createSuccess,
  [types.CREATE_FAILURE]: actions.createFailure,
});

// src/reducers/Booking/Reducers.js
