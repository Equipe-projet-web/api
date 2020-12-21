'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    offer_id: DataTypes.INTEGER,
    book_at: DataTypes.DATE,
    email: DataTypes.STRING,
    reference_website: DataTypes.STRING
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};