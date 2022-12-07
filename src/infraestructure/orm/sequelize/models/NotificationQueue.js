module.exports = (sequelize, DataTypes) => sequelize.define('NotificationQueue', {
  IdNotificationQueue: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  IdNotification: {
    type: DataTypes.INTEGER,
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
}, {
  tableName: 'tbNotificationQueue',
  schema: 'sec',
});
