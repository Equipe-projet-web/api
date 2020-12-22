'use strict';
module.exports = (sequelize, DataTypes) => {
  const OfferRaceRound = sequelize.define('OfferRaceRound', {
    offerId: {type: DataTypes.INTEGER, allowNull: false,},
    raceRoundId: {type: DataTypes.INTEGER, allowNull: false,}
  }, {});
  OfferRaceRound.associate = function(models) {
    // associations can be defined here
  };
  return OfferRaceRound;
};