const sequelize = require('./database');
const { Model, DataTypes } = require('sequelize');

class List extends Model {}

List.init({
  title: {
    type: DataTypes.STRING(75),
    allowNull: false,
    defaultValue: ''
  },
  position: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    defaultValue: 0
  },
}, {
  sequelize,
  tableName: 'list'
});

module.exports = List;
