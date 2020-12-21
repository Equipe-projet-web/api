'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookingPeople = sequelize.define('BookingPeople', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    date_of_birth: DataTypes.DATE,
    emmail: DataTypes.STRING,
    booking_id: DataTypes.INTEGER
  }, {});
  BookingPeople.associate = function(models) {
    // associations can be defined here
  };
  return BookingPeople;
};