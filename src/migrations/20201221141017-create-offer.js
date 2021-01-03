'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Offers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      booking_open_at: {
        type: Sequelize.DATE
      },
      price: {
        type: Sequelize.FLOAT
      },
      ticketPrefix: {
        type: Sequelize.STRING
      },
      openBookWebsite: {
        type: Sequelize.BOOLEAN
      },
      category : {
        type: Sequelize.STRING,
        allowNull: true
      },
      raceId : {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Date.now()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Date.now()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Offers');
  }
};
