'use strict';
module.exports = (sequelize, DataTypes) => {
  const Circuits = sequelize.define('Circuits', {
    name: {type : DataTypes.STRING, allowNull: false},
    color: {type : DataTypes.STRING, allowNull: false},
    length: {type : DataTypes.FLOAT, allowNull: false},
    description:  DataTypes.TEXT
  }, {});
  Circuits.associate = function(models) {
    // associations can be defined here
  };
  return Circuits;
};