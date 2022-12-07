module.exports = (sequelize, DataTypes) => sequelize.define('EmailTemplate', {
  IdEmailTemplate: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Template: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'tbEmailTemplate',
  schema: 'sec',
});
