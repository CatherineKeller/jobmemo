const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class Card extends Model {}

Card.init({
  title: {
    type: DataTypes.STRING(75),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  link: {
    type: DataTypes.STRING(75),
  },
  compagny_name: {
    type: DataTypes.STRING(75),
    allowNull: false,
  },
  compagny_address: {
    type: DataTypes.STRING(75),
  },
  contact_name: {
    type: DataTypes.STRING(75),
  },
  contact_firstname: {
    type: DataTypes.STRING(75),
  },
  contact_email: {
    type: DataTypes.STRING(50),
  },
  contact_phone: {
    type: DataTypes.STRING(75),
  },
  notes: {
    type: DataTypes.STRING(75),
  },
  position: {
    type: DataTypes.SMALLINT,
    allowNull: false,
    defaultValue: 0,
  },
}, {
  sequelize,
  tableName: 'card',
});

module.exports = Card;
