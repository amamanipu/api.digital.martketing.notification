/* eslint-disable no-console */
module.exports = async (server, notificationQueueEntity, params) => {
  const repository = server.plugins.sql.client;
  return repository.notificationQueue.update(notificationQueueEntity, params).then((res) => {
    console.info(
      {
        message: 'Se actualizo correctamente el notificationQueue',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al actualizar el notificationQueue',
        details: err.message,
      },
    );
  });
};
