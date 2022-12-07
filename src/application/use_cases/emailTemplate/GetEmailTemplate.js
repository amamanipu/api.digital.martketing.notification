/* eslint-disable no-console */
module.exports = async (server, params) => {
  const repository = server.plugins.sql.client;
  return repository.emailTemplate.get(params).then((res) => {
    console.info(
      {
        message: 'Se obtuvo correctamente el email template',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al obtener el email template',
        details: err.message,
      },
    );
  });
};
