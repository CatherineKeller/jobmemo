const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class TypeCompagny extends Model {}

TypeCompagny.init({
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
  tableName: 'type_compagny',
});

module.exports = TypeCompagny;
