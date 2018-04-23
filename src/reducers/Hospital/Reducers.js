/**
 * Hospital reducer list
 */

export const reducers = (types, actions) => ({
  [types.LIST_REQUEST]: actions.listRequest,
  [types.LIST_SUCCESS]: actions.listSuccess,
  [types.LIST_FAILURE]: actions.listFailure,

  [types.DETAIL_REQUEST]: actions.detailRequest,
  [types.DETAIL_SUCCESS]: actions.detailSuccess,
  [types.DETAIL_FAILURE]: actions.detailFailure,

  [types.COUNT_REQUEST]: actions.countRequest,
  [types.COUNT_SUCCESS]: actions.countSuccess,
  [types.COUNT_FAILURE]: actions.countFailure,
});

// src/reducers/Hospital/Reducers.js
