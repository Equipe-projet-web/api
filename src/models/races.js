'use strict';
module.exports = (sequelize, DataTypes) => {
  const Races = sequelize.define('Races', {
    name: DataTypes.STRING,
    circuit_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    description: DataTypes.TEXT
  }, {});
  Races.associate = function(models) {
    // associations can be defined here
  };
  return Races;
};