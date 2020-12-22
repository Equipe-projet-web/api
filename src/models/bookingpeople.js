'use strict';



module.exports = (sequelize, DataTypes) => {
  const BookingPeople = sequelize.define('BookingPeople', {
    firstName:     {type: DataTypes.STRING, allowNull: false},
    lastName:      {type: DataTypes.STRING, allowNull: false},
    dateOfBirth:  {type: DataTypes.DATE, allowNull: false},
    email:          {type: DataTypes.STRING, allowNull: false},
    bookingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references : {
        model: 'Booking',
        key: 'id'
      }
    }
  }, {});
  BookingPeople.associate = function(models) {
    // associations can be defined here
  };
  return BookingPeople;
};