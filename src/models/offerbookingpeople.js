'use strict';
const Offer = require('../models/offer');
const BookingPeople = require('../models/bookingpeople');


module.exports = (sequelize, DataTypes) => {
  const OfferBookingPeople = sequelize.define('OfferBookingPeople', {
    offerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Offer,
        key: "offerId"
      }
    },
    bookingPeopleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: BookingPeople,
        key: "bookingPeopleId"
      }
    }
  }, {});
  OfferBookingPeople.associate = function(models) {
    // associations can be defined here
  };
  return OfferBookingPeople;
};