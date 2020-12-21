'use strict';
module.exports = (sequelize, DataTypes) => {
  const OfferRaceRound = sequelize.define('OfferRaceRound', {
    offer_id: {type: DataTypes.INTEGER, allowNull: false,},
    race_round_id: {type: DataTypes.INTEGER, allowNull: false,}
  }, {});
  OfferRaceRound.associate = function(models) {
    // associations can be defined here
  };
  return OfferRaceRound;
};