'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
      'Races',
      [
        {
          name: 'Grand Prix de Monaco 2021',
          circuit_id: 1,
          start_date: Date.parse('20 May 2021 00:00:00 GMT'),
          end_date: Date.parse('23 May 2021 00:00:00 GMT'),
          description: "La 78e édition du Grand Prix de Monaco de Formule 1 se déroulera du jeudi 20 au dimanche 23 mai 2021*, avec un programme toujours aussi riche en sport, en animations et en festivités.",
        }
      ],
      {},
  ),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
