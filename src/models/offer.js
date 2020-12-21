'use strict';
module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    name: DataTypes.STRING,
    booking_open_at: DataTypes.DATE,
    prince: DataTypes.FLOAT,
    ticket_prefix: DataTypes.STRING,
    open_book_website: DataTypes.BOOLEAN
  }, {});
  Offer.associate = function(models) {
    // associations can be defined here
  };
  return Offer;
};