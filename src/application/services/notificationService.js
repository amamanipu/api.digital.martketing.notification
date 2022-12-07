/* eslint-disable no-console */
const userService = require('../use_cases/user/UserService');
const notificationQueueService = require('../use_cases/notificationQueue/NotificationQueueService');
const sendService = require('../use_cases/send/sendService');
const passwordService = require('../use_cases/password/PasswordService');
const constants = require('../../common/constants');

const send = async (server) => {
  try {
    const responseNotificationQueue = await notificationQueueService.getAll(server, {
      State: 0,
    });

    if (responseNotificationQueue.length > 0 && responseNotificationQueue !== null) {
      responseNotificationQueue.forEach(async (notificationQueue) => {
        if (notificationQueue.Code === constants.notification.recoveryPassword) {
          let body = notificationQueue.Template;
          const password = `${notificationQueue.IdNotificationQueue}3OC0E${notificationQueue.UserId}`;
          const passwordHashed = await passwordService.hashed(password);

          await userService.update(server, {
            Password: passwordHashed,
          }, {
            UserId: notificationQueue.UserId,
          });

          body = body.replace('[[IMAGELOGO]]', constants.defaultValues.urlLogo);
          body = body.replace('[[NEWPASSWORD]]', password);
          body = body.replace('[[FULLNAME]]', `${notificationQueue.Names} ${notificationQueue.LastNames === null ? '' : notificationQueue.LastNames}`);

          await sendService.mail(notificationQueue.Email, notificationQueue.WithCopy,
            notificationQueue.Subject, body);

          await notificationQueueService.update(server, {
            Body: body,
            State: 1,
            DateSend: new Date(Date.now()).toString(),
          }, {
            IdNotificationQueue: notificationQueue.IdNotificationQueue,
          });
        } else if (notificationQueue.Code === constants.notification.organizationCreate) {
          let body = notificationQueue.Template;
          const responseUser = await userService.get(server, {
            UserId: notificationQueue.UserId,
          });

          body = body.replace('[[IMAGELOGO]]', constants.defaultValues.urlLogo);
          body = body.replace('[[FULLNAME]]', `${notificationQueue.Names} ${notificationQueue.LastNames === null ? '' : notificationQueue.LastNames}`);
          body = body.replace('[[ORGANIZATION]]', `${notificationQueue.OrganizationName}`);
          body = body.replace('[[ORGANIZATION]]', `${notificationQueue.OrganizationName}`);
          body = body.replace('[[USERNAME]]', `${responseUser.LogonName}`);
          body = body.replace('[[PASSWORD]]', `${constants.defaultValues.password}${notificationQueue.OrganizationId}`);

          await sendService.mail(notificationQueue.Email, notificationQueue.WithCopy,
            notificationQueue.Subject, body);

          await notificationQueueService.update(server, {
            Body: body,
            State: 1,
            DateSend: new Date(Date.now()).toString(),
          }, {
            IdNotificationQueue: notificationQueue.IdNotificationQueue,
          });
        }
      });
    } else {
      console.info(
        {
          message: 'No hay notificaciones para enviar.',
        },
      );
    }
  } catch (error) {
    console.error(
      {
        message: 'Error al enviar notificaion',
        details: error.message,
      },
    );
  }
};

module.exports = {
  send,
};
