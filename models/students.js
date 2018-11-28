'use strict';
module.exports = (sequelize, DataTypes) => {
  const students = sequelize.define('students', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING
  }, {});
  students.associate = function(models) {
    // associations can be defined here
  };
  return students;
};