'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define('Notification', {
    email: {type: DataTypes.STRING, allowNull: false },
  }, {});
  Notification.associate = function(models) {
    // associations can be defined here
  };
  return Notification;
};
