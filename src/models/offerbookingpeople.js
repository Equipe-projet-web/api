'use strict';
module.exports = (sequelize, DataTypes) => {
  const OfferBookingPeople = sequelize.define('OfferBookingPeople', {
    offer_id: DataTypes.INTEGER,
    booking_people_id: DataTypes.INTEGER
  }, {});
  OfferBookingPeople.associate = function(models) {
    // associations can be defined here
  };
  return OfferBookingPeople;
};