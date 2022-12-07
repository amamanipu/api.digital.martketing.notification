/* eslint-disable no-console */
const GetAllNotificationQueue = require('./GetAllNotificationQueue');
const GetNotificationQueue = require('./GetNotificationQueue');
const UpdateNotificationQueue = require('./UpdateNotificationQueue');

const getAll = async (server, params) => {
  try {
    return GetAllNotificationQueue(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get all notification queue',
        details: error.message,
      },
    );
    return null;
  }
};

const get = async (server, params) => {
  try {
    return GetNotificationQueue(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get notification queue',
        details: error.message,
      },
    );
    return null;
  }
};

const update = async (server, notificationQueue, params) => {
  try {
    return UpdateNotificationQueue(server, notificationQueue, params);
  } catch (error) {
    console.error(
      {
        message: 'Error service update notification queue',
        details: error.message,
      },
    );
    return null;
  }
};

module.exports = {
  getAll,
  get,
  update,
};
