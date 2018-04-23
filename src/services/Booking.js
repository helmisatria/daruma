/**
 * Booking services API
 */

export const Booking = (api) => {
  const get = {
  };

  const post = {
    create: params =>
      api.post('booking', params),
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

// src/services/Booking.js
