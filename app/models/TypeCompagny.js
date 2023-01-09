const sequelize = require('./database');
const { Model, DataTypes } = require('sequelize');

class TypeCompagny extends Model {}

TypeCompagny.init({
  name: {
    type: DataTypes.STRING(75),
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'type_compagny'
});

module.exports = TypeCompagny;
