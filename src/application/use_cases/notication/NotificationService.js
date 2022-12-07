/* eslint-disable no-console */
const GetAllNotification = require('./GetAllNotification');
const GetNotification = require('./GetNotification');

const getAll = async (server, params) => {
  try {
    return GetAllNotification(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get all notification',
        details: error.message,
      },
    );
    return null;
  }
};

const get = async (server, params) => {
  try {
    return GetNotification(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get notification',
        details: error.message,
      },
    );
    return null;
  }
};

module.exports = {
  getAll,
  get,
};
