/* eslint-disable no-console */
module.exports = async (server, params, exclude = null) => {
  const repository = server.plugins.sql.client;
  return repository.notificaction.get(params, exclude).then((res) => {
    console.info(
      {
        message: 'Se obtuvo correctamente la notificacion',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al obtener la notificacion',
        details: err.message,
      },
    );
  });
};
