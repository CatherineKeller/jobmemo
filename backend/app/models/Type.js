const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Type extends Model {}

Type.init({
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
  tableName: 'type',
});

module.exports = Type;
