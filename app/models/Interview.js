const sequelize = require('./database');
const { Model, DataTypes } = require('sequelize');

class Interview extends Model {}

Interview.init({
  comment: {
    type: DataTypes.STRING(75),
    allowNull: false,
    defaultValue: '',
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  sequelize,
  tableName: 'interview'
});

module.exports = Interview;
