const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Interview extends Model {}

Interview.init({
  comment: {
    type: DataTypes.STRING(75),
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'interview',
});

module.exports = Interview;
