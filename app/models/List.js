const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class List extends Model {}

List.init({
  position: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  sequelize,
  tableName: 'list',
});

module.exports = List;
