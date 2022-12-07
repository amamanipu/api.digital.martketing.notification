const EmailTemplate = require('../../domain/EmailTemplateModel');

const register = async ({ getConnection }) => {
  /**
   * Get All Email Template
   * @param {any} params
   * @returns
   */
  const getAll = async (params) => {
    const { models } = await getConnection();
    const model = models.EmailTemplate;

    const seqEmailTemplates = await model.findAll(
      {
        where: params,
      },
    );

    if (seqEmailTemplates === null) {
      return null;
    }

    return seqEmailTemplates.map((seqEmailTemplate) => new EmailTemplate(seqEmailTemplate));
  };

  /**
   * Get Email Template
   * @param {any} params
   * @returns
   */
  const get = async (params) => {
    const { models } = await getConnection();
    const model = models.EmailTemplate;

    const seqEmailTemplate = await model.findOne(
      {
        where: params,
      },
    );

    if (seqEmailTemplate === null) {
      return null;
    }

    return new EmailTemplate(seqEmailTemplate.dataValues);
  };

  return {
    getAll,
    get,
  };
};

module.exports = { register };
