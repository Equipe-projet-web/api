'use strict';
const Offer = require('../models/offer');
const Booking = require('../models/booking');


module.exports = (sequelize, DataTypes) => {
  const OfferBooking = sequelize.define('OfferBooking', {
    offerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Offer,
        key: "offerId"
      }
    },
    bookingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Booking,
        key: "bookingId"
      }
    },
    count : {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  OfferBooking.associate = function(models) {
    // associations can be defined here
  };
  return OfferBooking;
};
