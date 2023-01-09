const sequelize = require('./database');
const { Model, DataTypes } = require('sequelize');

class Event extends Model {}

Event.init({
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING(75),
    allowNull: false,
    defaultValue: '',
  },
}, {
  sequelize,
  tableName: 'event'
});

module.exports = Event;
