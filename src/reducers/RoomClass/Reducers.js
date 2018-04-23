/**
 * RoomClass reducer list
 */

export const reducers = (types, actions) => ({
  [types.LIST_REQUEST]: actions.listRequest,
  [types.LIST_SUCCESS]: actions.listSuccess,
  [types.LIST_FAILURE]: actions.listFailure,

});

// src/reducers/RoomClass/Reducers.js
