/* eslint-disable no-console */
module.exports = async (server, params) => {
  const repository = server.plugins.sql.client;
  return repository.notificaction.getAll(params).then((res) => {
    console.info(
      {
        message: 'Se obtuvo correctamente las notificaciones',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al obtener las notificaciones',
        details: err.message,
      },
    );
  });
};
