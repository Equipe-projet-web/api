'use strict';
module.exports = (sequelize, DataTypes) => {
  const OfferBookingPeople = sequelize.define('OfferBookingPeople', {
    offer_id: {type: DataTypes.INTEGER, allowNull: false},
    booking_people_id: {type: DataTypes.INTEGER, allowNull: false}
  }, {});
  OfferBookingPeople.associate = function(models) {
    // associations can be defined here
  };
  return OfferBookingPeople;
};