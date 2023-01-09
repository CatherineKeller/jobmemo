const sequelize = require('./database');
const { Model, DataTypes } = require('sequelize');

class List extends Model {}

List.init({
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
