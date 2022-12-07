/* eslint-disable no-console */
module.exports = async (server, params) => {
  const repository = server.plugins.sql.client;
  return repository.notificationQueue.getAll(params).then((res) => {
    console.info(
      {
        message: 'Se obtuvo correctamente los notification queue',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al obtener los notification queue',
        details: err.message,
      },
    );
  });
};
