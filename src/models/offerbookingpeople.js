'use strict';
module.exports = (sequelize, DataTypes) => {
  const OfferBookingPeople = sequelize.define('OfferBookingPeople', {
    offerId: {type: DataTypes.INTEGER, allowNull: false},
    bookingPeopleId: {type: DataTypes.INTEGER, allowNull: false}
  }, {});
  OfferBookingPeople.associate = function(models) {
    // associations can be defined here
  };
  return OfferBookingPeople;
};