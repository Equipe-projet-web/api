'use strict';
module.exports = (sequelize, DataTypes) => {
  const RaceRounds = sequelize.define('RaceRounds', {
    name: DataTypes.STRING,
    race_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    description: DataTypes.TEXT
  }, {});
  RaceRounds.associate = function(models) {
    // associations can be defined here
  };
  return RaceRounds;
};