const Notification = require('../../domain/NotificationModel');

const register = async ({ getConnection }) => {
  /**
   * Get All Notification
   * @param {any} params
   * @returns
   */
  const getAll = async (params) => {
    const { models } = await getConnection();
    const model = models.Notification;

    const seqNotifications = await model.findAll(
      {
        where: params,
      },
    );

    if (seqNotifications === null) {
      return null;
    }

    return seqNotifications.map((seqNotification) => new Notification(seqNotification.dataValues));
  };

  /**
   * Get Notification
   * @param {any} params
   * @returns
   */
  const get = async (params) => {
    const { models } = await getConnection();
    const model = models.Notification;

    const seqNotification = await model.findOne(
      {
        where: params,
      },
    );

    if (seqNotification === null) {
      return null;
    }

    return new Notification(seqNotification.dataValues);
  };

  return {
    getAll,
    get,
  };
};

module.exports = { register };
