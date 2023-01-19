const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Candidacy extends Model {}

Candidacy.init({
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
  tableName: 'candidacy',
});

module.exports = Candidacy;
