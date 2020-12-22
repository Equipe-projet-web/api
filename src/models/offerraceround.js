'use strict';
const Offer = require('../models/offer');
const RaceRound = require('../models/raceround');


module.exports = (sequelize, DataTypes) => {
  const OfferRaceRound = sequelize.define('OfferRaceRound', {
    offerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Offer,
        key: "offerId"
      }
    },
    raceRoundId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: RaceRound,
        key: "raceRoundId"
      }
    }
  }, {});
  OfferRaceRound.associate = function(models) {
    // associations can be defined here
  };
  return OfferRaceRound;
};