'use strict';



module.exports = (sequelize, DataTypes) => {
  const BookingPeople = sequelize.define('BookingPeople', {
    firstName:     {type: DataTypes.STRING, allowNull: false},
    lastName:      {type: DataTypes.STRING, allowNull: false},
    email:          {type: DataTypes.STRING, allowNull: false},
    bookingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references : {
        model: 'Booking',
        key: 'id'
      }
    },
    offerBookingId : {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {});
  BookingPeople.associate = function(models) {
    // associations can be defined here
  };
  return BookingPeople;
};
