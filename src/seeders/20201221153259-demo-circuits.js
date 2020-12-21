'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
      'Circuits',
      [
        {
          name: 'Grand Prix de Monaco',
          color: '#ce1126',
          length: 3.337,
          laps: 78,
          description: "Le Grand Prix de Monaco est une des plus anciennes et l'une des trois courses les plus prestigieuses au monde, disputée en principauté de Monaco, sur un circuit urbain conçu en 1929, par Antony Noghès fils du président de l'Automobile Club de Monaco, sous les auspices du prince Louis II de Monaco. Cette création répondait au défi d'organiser une compétition sur le territoire exigu de Monaco (environ 1,5 km2 à l'époque), condition requise par la Commission Sportive Internationale pour que l'Automobile Club de Monaco soit reconnu internationalement. En effet, l'autre grande compétition monégasque, le rallye automobile Monte-Carlo, créé dès 1911, était disputé sur les routes de nombreux pays d'Europe.",
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
