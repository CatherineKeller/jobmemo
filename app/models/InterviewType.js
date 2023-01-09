const sequelize = require('./database');
const { Model, DataTypes } = require('sequelize');

class InterviewType extends Model {}

InterviewType.init({
  name: {
    type: DataTypes.STRING(75),
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'interview_type'
});

module.exports = InterviewType;
