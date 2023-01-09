const sequelize = require('./database');
const { Model, DataTypes } = require('sequelize');

class Candidacy extends Model {}

Candidacy.init({
  name: {
    type: DataTypes.STRING(75),
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'candidacy'
});

module.exports = Candidacy;
