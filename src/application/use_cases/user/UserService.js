/* eslint-disable no-console */
const GetUser = require('./GetUser');
const UpdateUser = require('./UpdateUser');

const get = async (server, params, exclude = null) => {
  try {
    return GetUser(server, params, exclude);
  } catch (error) {
    console.error(
      {
        message: 'Error service get user',
        details: error.message,
      },
    );
    return null;
  }
};

const update = async (server, user, params) => {
  try {
    await UpdateUser(server, {
      Password: user.Password,
      DateUpdate: new Date(Date.now()).toString(),
    }, {
      UserId: params.UserId,
    });
  } catch (error) {
    console.error(
      {
        message: 'Error service update user',
        details: error.message,
      },
    );
  }
};

module.exports = {
  get,
  update,
};
