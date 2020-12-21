'use strict';
module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    name: {type : DataTypes.STRING, allowNull: false},
    booking_open_at: {type : DataTypes.DATE, allowNull: false},
    price: {type : DataTypes.FLOAT, allowNull: false},
    ticket_prefix: {type : DataTypes.STRING, allowNull: false},
    open_book_website: {type : DataTypes.BOOLEAN, allowNull: false}
  }, {});
  Offer.associate = function(models) {
    // associations can be defined here
  };
  return Offer;
};