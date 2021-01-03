'use strict';

function toMysqlDate(value){
    value = value.split('/');
    return new Date(value[2], value[1], value[0]);
}

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
      'Offers',
      [
          {
              id: 1,
              raceId: 6,
              name: "Tribune B - Gold Package - (jeu-sam-dim)",
              category: "TRIBUNES PREMIUM ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1430,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 2,
              raceId: 6,
              name: "Tribune K - Sections 1/2 - (dimanche)",
              category: "TRIBUNES PREMIUM ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 633,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 3,
              raceId: 6,
              name: "Tribune K - Sections 1/2 - (samedi)",
              category: "TRIBUNES PREMIUM ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 288,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 4,
              raceId: 6,
              name: "Tribune K - Gold Package - (jeu-sam-dim)",
              category: "TRIBUNES PREMIUM ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1265,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 5,
              raceId: 6,
              name: "Tribune K - Silver Package - (jeu-sam-dim)",
              category: "TRIBUNES PREMIUM ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1100,
              ticketPrefix: "TP-",
              openBookWebsite: false
          },
          {
              id: 6,
              raceId: 6,
              name: "Terrasse Elite Rooftop - (sam-dim)",
              category: "TERRASSES VIP",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 3450,
              ticketPrefix: "TVIP-",
              openBookWebsite: true
          },
          {
              id: 7,
              raceId: 6,
              name: "Terrasse Elite Rooftop - (dimanche)",
              category: "TERRASSES VIP",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 2850,
              ticketPrefix: "TVIP-",
              openBookWebsite: true
          },
          {
              id: 8,
              raceId: 6,
              name: "Terrasse Elite Rooftop -  (samedi)",
              category: "TERRASSES VIP",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1150,
              ticketPrefix: "TVIP-",
              openBookWebsite: true
          },
          {
              id: 9,
              raceId: 6,
              name: "Terrasse VIP Platinium -  (sam,dim)",
              category: "TERRASSES VIP",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 2600,
              ticketPrefix: "TVIP-",
              openBookWebsite: true
          },
          {
              id: 10,
              raceId: 6,
              name: "Terrasse VIP Platinium -  (dimanche)",
              category: "TERRASSES VIP",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 2290,
              ticketPrefix: "TVIP-",
              openBookWebsite: true
          },
          {
              id: 11,
              raceId: 6,
              name: "Terrasse VIP Platinium -  (samedi)",
              category: "TERRASSES VIP",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 890,
              ticketPrefix: "TVIP-",
              openBookWebsite: true
          },
          {
              id: 12,
              raceId: 6,
              name: "Terrasse Bronze -  (sam-dim)",
              category: "TERRASSES",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1290,
              ticketPrefix: "T-",
              openBookWebsite: true
          },
          {
              id: 13,
              raceId: 6,
              name: "Terrasse Bronze -  (dimanche)",
              category: "TERRASSES",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1090,
              ticketPrefix: "T-",
              openBookWebsite: true
          },
          {
              id: 14,
              raceId: 6,
              name: "Terrasse Bronze -  (samedi)",
              category: "TERRASSES",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 550,
              ticketPrefix: "T-",
              openBookWebsite: true
          },
          {
              id: 15,
              raceId: 6,
              name: "Terrasse Panoramique -  (jeudi)",
              category: "TERRASSES",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 250,
              ticketPrefix: "T-",
              openBookWebsite: true
          },
          {
              id: 16,
              raceId: 6,
              name: "Yacht Package VIP -  (sam-dim)",
              category: "PACKAGES YACHTS",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 3450,
              ticketPrefix: "YACHTS-",
              openBookWebsite: true
          },
          {
              id: 17,
              raceId: 6,
              name: "Yacht Package VIP -  (dimanche)",
              category: "PACKAGES YACHTS",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 2550,
              ticketPrefix: "YACHTS-",
              openBookWebsite: true
          },
          {
              id: 18,
              raceId: 6,
              name: "Yacht Package VIP -  (jeudi)",
              category: "PACKAGES YACHTS",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 700,
              ticketPrefix: "YACHTS-",
              openBookWebsite: true
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
