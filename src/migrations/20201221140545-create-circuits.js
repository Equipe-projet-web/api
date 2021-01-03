'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Circuits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      length: {
        type: Sequelize.FLOAT
      },
      laps: {
          type: Sequelize.INTEGER,
          allowNull: true
      },
      description: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue : Date.now()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue : Date.now()
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Circuits');
  }
};
