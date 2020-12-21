'use strict';
module.exports = (sequelize, DataTypes) => {
  const OfferRaceRound = sequelize.define('OfferRaceRound', {
    offer_id: DataTypes.INTEGER,
    race_round_id: DataTypes.INTEGER
  }, {});
  OfferRaceRound.associate = function(models) {
    // associations can be defined here
  };
  return OfferRaceRound;
};