'use strict';

function toMysqlDate(value){
    value = value.split('/');
    return new Date(value[2], value[1], value[0]);
}

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
      'RaceRounds',
      [
          {
              id: "1",
              name: "Essais",
              raceId: "6",
              day: toMysqlDate("20/05/2021"),
              description: null
          },
          {
              id: "2",
              name: "Qualifications",
              raceId: "6",
              day: toMysqlDate("22/05/2021"),
              description: null
          },
          {
              id: "3",
              name: "Course",
              raceId: "6",
              day: toMysqlDate("23/05/2021"),
              description: null
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
