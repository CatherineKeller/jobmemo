const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class InterviewType extends Model {}

InterviewType.init({
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
  tableName: 'interview_type',
});

module.exports = InterviewType;
