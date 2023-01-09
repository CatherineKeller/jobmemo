const sequelize = require('./database');
const { Model, DataTypes } = require('sequelize');

class Status extends Model {}

Status.init({
  name: {
    type: DataTypes.STRING(75),
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'status'
});

module.exports = Status;
