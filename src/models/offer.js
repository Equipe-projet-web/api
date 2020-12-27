'use strict';

const Offer = require('../models/race');


module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define('Offer', {
    name: {type : DataTypes.STRING, allowNull: false},
    booking_open_at: {type : DataTypes.DATE, allowNull: false},
    price: {type : DataTypes.FLOAT, allowNull: false},
    ticketPrefix: {type : DataTypes.STRING, allowNull: false},
    openBookWebsite: {type : DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    category: {type : DataTypes.STRING, allowNull: true}
  }, {});
  Offer.associate = function(models) {
    // associations can be defined here
  };
  return Offer;
};
