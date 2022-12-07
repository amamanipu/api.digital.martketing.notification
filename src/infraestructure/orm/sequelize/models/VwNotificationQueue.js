module.exports = (sequelize, DataTypes) => sequelize.define('vwNotificationQueue', {
  IdNotification: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ApplicationId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Code: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Template: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  IdNotificationQueue: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  WithCopy: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Body: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  State: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  DateSend: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  UserInsert: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DateInsert: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  UserUpdate: {
    type: DataTypes.STRING,
  },
  DateUpdate: {
    type: DataTypes.DATE,
  },
  Subject: {
    type: DataTypes.STRING,
  },
  MailFrom: {
    type: DataTypes.STRING,
  },
  Names: {
    type: DataTypes.STRING,
  },
  LastNames: {
    type: DataTypes.STRING,
  },
  OrganizationId: {
    type: DataTypes.STRING,
  },
  OrganizationName: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'vwNotificationQueue',
  schema: 'dbo',
});
