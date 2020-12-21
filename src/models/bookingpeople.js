'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookingPeople = sequelize.define('BookingPeople', {
    first_name:     {type: DataTypes.STRING, allowNull: false},
    last_name:      {type: DataTypes.STRING, allowNull: false},
    date_of_birth:  {type: DataTypes.DATE, allowNull: false},
    email:          {type: DataTypes.STRING, allowNull: false},
    booking_id:     {type: DataTypes.INTEGER, allowNull: false}
  }, {});
  BookingPeople.associate = function(models) {
    // associations can be defined here
  };
  return BookingPeople;
};