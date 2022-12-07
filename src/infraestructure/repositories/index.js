const emailTemplate = require('./EmailTemplateRepository');
const notificationQueue = require('./NotificationQueueRepository');
const notificaction = require('./NotificactionRepository');
const user = require('./UserRepository');

module.exports = {
  emailTemplate,
  notificationQueue,
  notificaction,
  user,
};
