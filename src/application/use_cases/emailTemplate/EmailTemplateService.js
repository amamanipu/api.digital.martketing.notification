/* eslint-disable no-console */
const GetAllEmailTemplate = require('./GetAllEmailTemplate');
const GetEmailTemplate = require('./GetEmailTemplate');

const getAll = async (server, params) => {
  try {
    return GetAllEmailTemplate(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get all email template',
        details: error.message,
      },
    );
    return null;
  }
};

const get = async (server, params) => {
  try {
    return GetEmailTemplate(server, params);
  } catch (error) {
    console.error(
      {
        message: 'Error Service get email template',
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
