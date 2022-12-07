/* eslint-disable no-console */
module.exports = async (server, params) => {
  const repository = server.plugins.sql.client;
  return repository.emailTemplate.getAll(params).then((res) => {
    console.info(
      {
        message: 'Se obtuvo correctamente los email template',
        details: res,
      },
    );
    return res;
  }).catch((err) => {
    console.error(
      {
        message: 'Error al obtener los email template',
        details: err.message,
      },
    );
  });
};
