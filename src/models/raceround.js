'use strict';
const Race = require('../models/race');

module.exports = (sequelize, DataTypes) => {
  const RaceRound = sequelize.define('RaceRound', {
    name: {type: DataTypes.STRING, allowNull: false},
    raceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Race,
        key: "raceId"
      }
    },
    day: {type: DataTypes.DATE, allowNull: false},
    description: DataTypes.TEXT
  }, {});
  RaceRound.associate = function(models) {
    // associations can be defined here
  };
  return RaceRound;
};
