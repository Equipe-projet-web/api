'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    bookAt: {type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    email: {type: DataTypes.STRING, allowNull: false,},
    phone: {type: DataTypes.STRING, allowNull: false,},
    city: {type: DataTypes.STRING, allowNull: false,},
    address: {type: DataTypes.STRING, allowNull: false,},
    firstName: {type: DataTypes.STRING, allowNull: false,},
    lastName: {type: DataTypes.STRING, allowNull: false,},
    referenceWebsite: {type: DataTypes.STRING, allowNull: false}
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};
