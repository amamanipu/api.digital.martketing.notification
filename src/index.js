/* eslint-disable no-console */
/**
 * @fileoverview Clase de inicio de programa.
 * @version     1.0
 * @author      Herly Limachi, Yoski Burgos, Willians Escate
 * @copyright
 *
 * History
 * v1.0 – Se crea la clase
 * ----
 * La primera versión de routes fue escrita por Angel Mamani
 */

const dotenv = require('dotenv');
const cron = require('node-cron');
const { loadSecrets } = require('./config/secretManager');
const { loadConfig } = require('./config');
const server = require('./server');
const loggerWrite = require('./common/logger');
const { etiquetas } = require('./common/secretLabels');
const notificationService = require('./application/services/notificationService');

dotenv.config();

/**
 * Función de arranque de aplicacion, registrada como tal en package.json.
 */

async function startServer() {
  try {
    const secrets = await loadSecrets(
      {
        env: process.env.APP_ENV || 'qa',
        project: process.env.PROJECT || '',
        version: process.env.VERSION || 'latest',
        keys: etiquetas,
      }, process.env.MODE || 'online',
    );

    const config = loadConfig(secrets);
    console.log(config);
    const app = await server(config);
    await app.start();

    console.log(`Servidor en: http://${config.host}:${config.port}...`);

    const task = cron.schedule('1 * * * * *', async () => {
      try {
        await notificationService.send(app);
      } catch (error) {
        console.error(
          {
            message: 'Error Batch',
            details: JSON.stringify(error),
          },
        );
      }
    });
    task.start();

    process.on('uncaughtException', (err) => {
      loggerWrite.write().error(['Caught exception'], err);
      process.exit(1);
    });

    loggerWrite.write().info(['Server is started']);
  } catch (err) {
    console.log('Error en la carga:', err);
  }
}

startServer();
