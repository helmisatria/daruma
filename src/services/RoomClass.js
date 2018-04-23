/**
 * RoomClass services API
 */

export const RoomClass = (api) => {
  const get = {
    list: () =>
      api.get('room_class'),
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

// src/services/RoomClass.js
