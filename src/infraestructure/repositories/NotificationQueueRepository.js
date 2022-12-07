const NotificationQueue = require('../../domain/NotificationQueueModel');
const VwNotificationQueue = require('../../domain/VwNotificationQueueModel');

const register = async ({ getConnection }) => {
  /**
   * Get All Notification Queue
   * @param {any} params
   * @returns
   */
  const getAll = async (params) => {
    const { models } = await getConnection();
    const model = models.vwNotificationQueue;

    const seqNotificationQueues = await model.findAll(
      {
        where: params,
      },
    );

    if (seqNotificationQueues === null) {
      return null;
    }

    return seqNotificationQueues.map((
      seqNotificationQueue,
    ) => new VwNotificationQueue(
      seqNotificationQueue,
    ));
  };

  /**
   * Get Notification Queue
   * @param {any} params
   * @returns
   */
  const get = async (params) => {
    const { models } = await getConnection();
    const model = models.NotificationQueue;

    const seqNotificationQueue = await model.findOne(
      {
        where: params,
      },
    );

    if (seqNotificationQueue === null) {
      return null;
    }

    return new NotificationQueue(seqNotificationQueue);
  };

  /**
   * Update Notification Queue
   * @param {any} notificationQueueEntity
   * @param {any} params
   * @returns
   */
  const update = async (notificationQueueEntity, params) => {
    const { models } = await getConnection();
    const model = models.NotificationQueue;
    const seqNotificationQueue = await model.update(notificationQueueEntity,
      { where: params })
      .then(() => get(params));

    return new NotificationQueue(seqNotificationQueue);
  };

  return {
    getAll,
    get,
    update,
  };
};

module.exports = { register };
