/**
 * Patient reducer list
 */

export const reducers = (types, actions) => ({
  [types.REGISTER_REQUEST]: actions.registerRequest,
  [types.REGISTER_SUCCESS]: actions.registerSuccess,
  [types.REGISTER_FAILURE]: actions.registerFailure,

  [types.LOGIN_REQUEST]: actions.loginRequest,
  [types.LOGIN_SUCCESS]: actions.loginSuccess,
  [types.LOGIN_FAILURE]: actions.loginFailure,
});

// src/reducers/Patient/Reducers.js
