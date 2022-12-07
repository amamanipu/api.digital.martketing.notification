const User = require('../../domain/UserModel');

const register = async ({ getConnection }) => {
  /**
   * Get User
   * @param {any} params
   * @returns
   */
  const get = async (params) => {
    const { models } = await getConnection();
    const model = models.User;

    const seqUser = await model.findOne(
      {
        where: params,
      },
    );

    if (seqUser === null) {
      return null;
    }

    return new User(seqUser);
  };

  /**
   * Update User
   * @param {any} userEntity
   * @param {any} params
   * @returns
   */
  const update = async (userEntity, params) => {
    const { models } = await getConnection();
    const model = models.User;
    const seqUser = await model.update(userEntity,
      { where: params })
      .then(() => get(params));

    return new User(seqUser);
  };

  return {
    get,
    update,
  };
};

module.exports = { register };
