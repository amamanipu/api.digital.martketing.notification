/* eslint-disable no-console */
module.exports = async (server, params) => {
  const repository = server.plugins.sql.client;
  return repository.notificationQueue.get(params).then((res) => {
    console.info(
      {
        message: 'Se obtuvo correctamente el notification queue',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al obtener el notification queue',
        details: err.message,
      },
    );
  });
};
