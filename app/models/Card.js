const sequelize = require('./database');
const { Model, DataTypes } = require('sequelize');

class Card extends Model {}

Card.init({
  title: {
    type: DataTypes.STRING(75),
    allowNull: false,
    defaultValue: ''
  },
  description: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  link: {
    type: DataTypes.STRING(75),
    defaultValue: ''
  },
  compagny_name: {
    type: DataTypes.STRING(75),
    defaultValue: ''
  },
  compagny_address: {
    type: DataTypes.STRING(75),
    defaultValue: ''
  },
  contact_name: {
    type: DataTypes.STRING(75),
    defaultValue: ''
  },
  contact_firstname: {
    type: DataTypes.STRING(75),
    defaultValue: ''
  },
  contact_email: {
    type: DataTypes.STRING(50),
    defaultValue: ''
  },
  contact_phone: {
    type: DataTypes.STRING(75),
    defaultValue: ''
  },
  notes: {
    type: DataTypes.STRING(75),
    defaultValue: ''
  },
  position: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    defaultValue: 0
  },
}, {
  sequelize,
  tableName: 'card'
});

module.exports = Card;
