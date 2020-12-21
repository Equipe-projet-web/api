'use strict';
module.exports = (sequelize, DataTypes) => {
  const Circuits = sequelize.define('Circuits', {
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    length: DataTypes.FLOAT,
    description: DataTypes.TEXT
  }, {});
  Circuits.associate = function(models) {
    // associations can be defined here
  };
  return Circuits;
};