const Circuits = require('../models/circuits');

module.exports = (sequelize, DataTypes) => {
  const Races = sequelize.define('Races', {
    name: {type: DataTypes.STRING, allowNull: false},
    circuitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Circuits,
        key: "circuitId"
      }},

    startDate: {type: DataTypes.DATE, allowNull: false},
    endDate: {type: DataTypes.DATE, allowNull: false},
    description: DataTypes.TEXT
  }, {});
  Races.associate = function(models) {

  };
  return Races;
};