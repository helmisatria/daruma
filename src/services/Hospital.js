/**
 * Hospital services API
 */

export const Hospital = (api) => {
  const get = {
    list: params =>
      api.get('hospital', params),
    detail: id =>
      api.get(`hospital/${id}`),
    count: () =>
      api.get('hospital/count'),
  };

  const post = {
  };

  const put = {
  };

  const patch = {
  };

  const _delete = {
  };

  return {
    get,
    post,
    put,
    patch,
    delete: _delete
  };
};

// src/services/Hospital.js
