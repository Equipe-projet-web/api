'use strict';
module.exports = (sequelize, DataTypes) => {
  const RaceRounds = sequelize.define('RaceRounds', {
    name: {type: DataTypes.STRING, allowNull: false},
    race_id: {type: DataTypes.INTEGER, allowNull: false},
    start_date: {type: DataTypes.DATE, allowNull: false},
    end_date: {type: DataTypes.DATE, allowNull: false},
    description: DataTypes.TEXT
  }, {});
  RaceRounds.associate = function(models) {
    // associations can be defined here
  };
  return RaceRounds;
};