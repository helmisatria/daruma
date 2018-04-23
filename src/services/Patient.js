/**
 * Patient services API
 */

export const Patient = (api) => {
  const get = {
  };

  const post = {
    register: params =>
      api.post('patient', params),
    login: params =>
      api.post('patient/login', params),
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

// src/services/Patient.js
