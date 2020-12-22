'use strict';
module.exports = (sequelize, DataTypes) => {
  const RaceRounds = sequelize.define('RaceRounds', {
    name: {type: DataTypes.STRING, allowNull: false},
    raceId: {type: DataTypes.INTEGER, allowNull: false},
    startDate: {type: DataTypes.DATE, allowNull: false},
    endDate: {type: DataTypes.DATE, allowNull: false},
    description: DataTypes.TEXT
  }, {});
  RaceRounds.associate = function(models) {
    // associations can be defined here
  };
  return RaceRounds;
};