const sequelize = require('./database');
const { Model, DataTypes } = require('sequelize');

class Type extends Model {}

Type.init({
  name: {
    type: DataTypes.STRING(75),
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'type'
});

module.exports = Type;
