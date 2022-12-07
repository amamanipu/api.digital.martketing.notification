module.exports = (sequelize, DataTypes) => sequelize.define('Notificacion', {
  IdNotificacion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  ApplicationId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  IdEmailTemplate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  EstadoTabla: {
    type: DataTypes.SMALLINT,
    allowNull: false,
  },
  Estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  UsrIng: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  FecIng: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  UsrMod: {
    type: DataTypes.STRING,
  },
  FecMod: {
    type: DataTypes.DATE,
  },
  Titulo: {
    type: DataTypes.STRING,
  },
  Leyenda: {
    type: DataTypes.STRING,
  },
  Ocurre: {
    type: DataTypes.STRING,
  },
  Consideracion: {
    type: DataTypes.STRING,
  },
  Email: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'tbNotificacion',
  schema: 'sec',
});
