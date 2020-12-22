'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    offerId: {type : DataTypes.INTEGER, allowNull: false},
    book_at: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    email: {type: DataTypes.STRING, allowNull: false,},
    reference_website: {type: DataTypes.STRING, allowNull: false,}
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};