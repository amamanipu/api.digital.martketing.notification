/**
 * @fileoverview Routes for API's of orders.
 * @version     1.0
 * @author      Martin Elias, Angel Mamani
 * @copyright
 *
 * History
 * v1.0 – Se crea la clase
 * ----
 * La primera versión de routes fue escrita por Herly Limachi, Yoski Burgos, Willins Escate
 */

const healthyController = require('../controllers/healthyController');

/**
 * Función Asincrona para matriculación de controladores.
 * @param {any} server
 * @descriptor Servidor Happi
 */
module.exports.register = async (server) => {
  await healthyController.register(server);
};
