const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Status extends Model {}

Status.init({
  name: {
    type: DataTypes.STRING(75),
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING(75),
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'status',
});

module.exports = Status;
