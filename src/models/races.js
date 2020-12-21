'use strict';
module.exports = (sequelize, DataTypes) => {
  const Races = sequelize.define('Races', {
    name: {type: DataTypes.STRING, allowNull: false},
    circuit_id: {type: DataTypes.INTEGER, allowNull: false},
    start_date: {type: DataTypes.DATE, allowNull: false},
    end_date: {type: DataTypes.DATE, allowNull: false},
    description: DataTypes.TEXT
  }, {});
  Races.associate = function(models) {
    // associations can be defined here
  };
  return Races;
};