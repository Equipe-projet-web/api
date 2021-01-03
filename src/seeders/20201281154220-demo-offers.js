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
          },
          {
              id: 20,
              raceId: 1,
              name: "FANGIO LOUNGE (ven-sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1367,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 21,
              raceId: 1,
              name: "FANGIO LOUNGE (sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1169,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 22,
              raceId: 1,
              name: "FANGIO LOUNGE (dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 979,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 23,
              raceId: 1,
              name: "TORQUE BAR (ven-sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1026,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 24,
              raceId: 1,
              name: "TORQUE BAR (sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 923,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 25,
              raceId: 1,
              name: "TORQUE BAR (dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 618,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 26,
              raceId: 1,
              name: "CHICANE PAVILLON (ven-sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1527,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 27,
              raceId: 1,
              name: "CHICANE PAVILLON (sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1272,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 28,
              raceId: 1,
              name: "CHICANE PAVILLON  (dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1041,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 29,
              raceId: 1,
              name: "PIT ENTRY / PIT EXIT VICTORY SUITE (ven-sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 923,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 30,
              raceId: 1,
              name: "PIT ENTRY / PIT EXIT VICTORY SUITE (sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 734,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 31,
              raceId: 1,
              name: "PIT ENTRY / PIT EXIT VICTORY SUITE (dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 547,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 32,
              raceId: 1,
              name: "PIT ENTRY / PIT EXIT TRACKSIDE INTERNATIONAL (dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1499,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 33,
              raceId: 1,
              name: "PIT ENTRY / PIT EXIT SUPERCARS CLUB SUITE (dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1026,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 34,
              raceId: 1,
              name: "PADDOCK CLUB (ven-sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 2802,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 35,
              raceId: 1,
              name: "PADDOCK CLUB (sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 2522,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 36,
              raceId: 1,
              name: "PADDOCK CLUB (dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 6220,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 37,
              raceId: 1,
              name: "CORPORATE PLATFORMS TURN 15 (dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1371,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 38,
              raceId: 1,
              name: "CORPORATE PLATFORMS TURN 3&4 (dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1234,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 39,
              raceId: 1,
              name: "BRABHAM (dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1337,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 40,
              raceId: 1,
              name: "PARC CHALET (ven-sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 942,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 41,
              raceId: 1,
              name: "PARC CHALET (sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 752,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 42,
              raceId: 1,
              name: "PARC CHALET (dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 488,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 43,
              raceId: 1,
              name: "THE PARK (sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 637,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 44,
              raceId: 1,
              name: "THE PARK (dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 503,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 45,
              raceId: 1,
              name: "3-CORNER TRIBUNE BRABHAM FANGIO JONES (dim)",
              category: "3-CORNER",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 301,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 46,
              raceId: 1,
              name: "3-CORNER TRIBUNE JONES BRABHAM FANGIO (dim)",
              category: "3-CORNER",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 301,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 47,
              raceId: 1,
              name: "3-CORNER TRIBUNE JONES BRABHAM FANGIO (dim)",
              category: "3-CORNER",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 301,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 48,
              raceId: 1,
              name: "TRIBUNE RICCIARDO (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 355,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 49,
              raceId: 1,
              name: "TRIBUNE PIQUET (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 355,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 50,
              raceId: 1,
              name: "TRIBUNE FANGIO (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 355,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 51,
              raceId: 1,
              name: "TRIBUNE PROST (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 355,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 52,
              raceId: 1,
              name: "TRIBUNE SCHUMACHER (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 316,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 53,
              raceId: 1,
              name: "TRIBUNE SENNA (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 316,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 54,
              raceId: 1,
              name: "TRIBUNE SENNA (sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 167,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 55,
              raceId: 1,
              name: "TRIBUNE SENNA (dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 199,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 56,
              raceId: 1,
              name: "TRIBUNE BRABHAM (ven-sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 316,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 57,
              raceId: 1,
              name: "TRIBUNE BRABHAM (sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 282,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 58,
              raceId: 1,
              name: "TRIBUNE BRABHAM (dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 269,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 59,
              raceId: 1,
              name: "TRIBUNE JONES (ven-sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 316,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 60,
              raceId: 1,
              name: "TRIBUNE JONES (sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 282,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 61,
              raceId: 1,
              name: "TRIBUNE JONES (dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 316,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 62,
              raceId: 1,
              name: "TRIBUNE FANGIO (ven-sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 269,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 63,
              raceId: 1,
              name: "TRIBUNE FANGIO (sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 269,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 64,
              raceId: 1,
              name: "TRIBUNE FANGIO (dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 221,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 65,
              raceId: 1,
              name: "TRIBUNE PROST (ven-sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 269,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 66,
              raceId: 1,
              name: "TRIBUNE PROST (sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 237,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 67,
              raceId: 1,
              name: "TRIBUNE PROST (dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 221,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 68,
              raceId: 1,
              name: "TRIBUNE MOSS (sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 237,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 69,
              raceId: 1,
              name: "TRIBUNE MOSS (dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 221,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 70,
              raceId: 2,
              name: "PADDOCK CLUB (ven)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 699,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 71,
              raceId: 2,
              name: "PADDOCK CLUB (sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 3664,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 72,
              raceId: 2,
              name: "PADDOCK CLUB (ven-sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 4034,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 73,
              raceId: 2,
              name: "VIP TENT (ven-sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 138,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 74,
              raceId: 2,
              name: "TRIBUNE PRINCIPALE (dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 329,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 75,
              raceId: 2,
              name: "TRIBUNE VIRAGE 1 (dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 219,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 76,
              raceId: 2,
              name: "TRIBUNE UNIVERSITY (dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 131,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 77,
              raceId: 2,
              name: "TRIBUNE BATELCO (ven)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 131,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 78,
              raceId: 2,
              name: "TRIBUNE BATELCO (ven-sam)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 219,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 79,
              raceId: 2,
              name: "TRIBUNE BATELCO (ven-sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 263,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 80,
              raceId: 2,
              name: "TRIBUNE VICTORY (dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 131,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 81,
              raceId: 3,
              name: "TRIBUNE A PLATINIUM (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 346,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 82,
              raceId: 3,
              name: "TRIBUNE A GOLD+ (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 346,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 83,
              raceId: 3,
              name: "TRIBUNE A GOLD (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 346,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 84,
              raceId: 3,
              name: "TRIBUNE SILVER PLUS (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 346,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 85,
              raceId: 3,
              name: "TRIBUNE SILVER (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 346,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 86,
              raceId: 3,
              name: "TRIBUNE H (dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 108,
              ticketPrefix: "TP-",
              openBookWebsite: false
          },
          {
              id: 87,
              raceId: 3,
              name: "TRIBUNE K (dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 108,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 88,
              raceId: 3,
              name: "HERBE ZONE B (dim)",
              category: "ADMISSION GENERALE",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 72,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 89,
              raceId: 3,
              name: "HERBE ZONE F (dim)",
              category: "ADMISSION GENERALE",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 35,
              ticketPrefix: "TP-",
              openBookWebsite: false
          },
          {
              id: 90,
              raceId: 3,
              name: "HERBE ZONE J (dim)",
              category: "ADMISSION GENERALE",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 60,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 91,
              raceId: 3,
              name: "HERBE ZONE L (dim)",
              category: "ADMISSION GENERALE",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 60,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 92,
              raceId: 7,
              name: "PADDOCK CLUB (dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 657,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 93,
              raceId: 7,
              name: "PADDOCK CLUB (sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 2984,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 94,
              raceId: 7,
              name: "PADDOCK CLUB (ven-sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 3462,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 95,
              raceId: 7,
              name: "ABSHERON SECTION A (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 451,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 96,
              raceId: 7,
              name: "ABSHERON SECTION B (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 451,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 97,
              raceId: 7,
              name: "ABSHERON SECTION C (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 451,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 98,
              raceId: 7,
              name: "ABSHERON SECTION C HAUT (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 484,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 99,
              raceId: 7,
              name: "ABSHERON SECTION D BAS (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 484,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 100,
              raceId: 7,
              name: "ABSHERON SECTION E (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 451,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 101,
              raceId: 7,
              name: "AZNEFT (ven)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 98,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 102,
              raceId: 7,
              name: "AZNEFT  (sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 287,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 103,
              raceId: 7,
              name: "AZNEFT (ven-sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 320,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 104,
              raceId: 7,
              name: "MUGHAM (ven)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 82,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 105,
              raceId: 7,
              name: "MUGHAM  (sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 238,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 106,
              raceId: 7,
              name: "MUGHAM  (ven-sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 262,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 107,
              raceId: 7,
              name: "SAHIL (ven)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 82,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 108,
              raceId: 7,
              name: "SAHIL  (sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 238,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 109,
              raceId: 7,
              name: "SAHIL (ven-sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 262,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 110,
              raceId: 7,
              name: "ICHERI SHEHER (ven)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 73,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 111,
              raceId: 7,
              name: "ICHERI SHEHER (sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 205,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 112,
              raceId: 7,
              name: "ICHERI SHEHER (ven-sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 221,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 113,
              raceId: 7,
              name: "GIZ GALASI (ven)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 65,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 114,
              raceId: 7,
              name: "GIZ GALASI (sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 180,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 115,
              raceId: 7,
              name: "GIZ GALASI (dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 188,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 116,
              raceId: 7,
              name: "BULVAR  (sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 205,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 117,
              raceId: 7,
              name: "BULVAR (ven-sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 221,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 118,
              raceId: 7,
              name: "ADMISSION GENERALE (ven)",
              category: "ADMISSION GENERALE",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 32,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 119,
              raceId: 7,
              name: "ADMISSION GENERALE (ven-sam)",
              category: "ADMISSION GENERALE",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 49,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 120,
              raceId: 7,
              name: "ADMISSION GENERALE (ven-sam-dim)",
              category: "ADMISSION GENERALE",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 73,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 121,
              raceId: 10,
              name: "TRIBUNE DEPART ARRIVEE (ven-sam-dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 395,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 122,
              raceId: 10,
              name: "TRIBUNE DEPART ARRIVEE (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 355,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 123,
              raceId: 10,
              name: "TRIBUNE DEPART ARRIVEE SECTEUR O,P,Q (ven-sam-dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 315,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 124,
              raceId: 10,
              name: "TRIBUNE DEPART ARRIVEE SECTEUR O,P,Q (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 285,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 125,
              raceId: 10,
              name: "TRIBUNE REDBULL A (ven-sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 395,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 126,
              raceId: 10,
              name: "TRIBUNE REDBULL A (dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 355,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 127,
              raceId: 10,
              name: "TRIBUNE REDBULL B (ven-sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 315,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 128,
              raceId: 10,
              name: "TRIBUNE REDBULL B (dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 285,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 129,
              raceId: 10,
              name: "TRIBUNE REDBULL CDE (ven-sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 235,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 130,
              raceId: 10,
              name: "TRIBUNE REDBULL CDE (dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 210,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 131,
              raceId: 10,
              name: "TRIBUNE REDBULL FGHI (ven-sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 200,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 132,
              raceId: 10,
              name: "TRIBUNE REDBULL FGHI (dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 180,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 133,
              raceId: 10,
              name: "TRIBUNE HOPPING PLATINIUM (ven-sam-dim)",
              category: "3-CORNER ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 395,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 134,
              raceId: 10,
              name: "TRIBUNE HOPPING GOLD (ven-sam-dim)",
              category: "3-CORNER ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 315,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 135,
              raceId: 10,
              name: "TRIBUNE HOPPING SILVER (ven-sam-dim)",
              category: "3-CORNER ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 235,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 136,
              raceId: 10,
              name: "TRIBUNE STEIERMARK (ven-sam-dim)",
              category: "3-CORNER ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 395,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 137,
              raceId: 10,
              name: "TRIBUNE TRIBUNE DEPART ARRIVEE (ven-sam-dim)",
              category: "3-CORNER ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 395,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 138,
              raceId: 10,
              name: "TRIBUNE TRIBUNE REDBULL CDE (ven-sam-dim)",
              category: "3-CORNER ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 315,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 139,
              raceId: 10,
              name: "TRIBUNE T10 (ven-sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 390,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 140,
              raceId: 10,
              name: "TRIBUNE STEIRMARK (ven-sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 395,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 141,
              raceId: 10,
              name: "ADMISSION GENERALE (ven)",
              category: "ADMISSION GENERALE",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 35,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 142,
              raceId: 10,
              name: "ADMISSION GENERALE (sam-dim)",
              category: "ADMISSION GENERALE",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 76,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 143,
              raceId: 10,
              name: "ADMISSION GENERALE (ven-sam-dim)",
              category: "ADMISSION GENERALE",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 108,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 144,
              raceId: 8,
              name: "PADDOCK CLUB (dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 826,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 145,
              raceId: 8,
              name: "PADDOCK CLUB (sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 4345,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 146,
              raceId: 8,
              name: "PADDOCK CLUB (ven-sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 4770,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 147,
              raceId: 8,
              name: "LA TOUNDRA (ven-sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 635,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 148,
              raceId: 8,
              name: "PRIVILEGE (ven-sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 828,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 149,
              raceId: 8,
              name: "PLATINE CHALET (ven-sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1040,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 150,
              raceId: 8,
              name: "PODIUM CLUB (ven-sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1614,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 151,
              raceId: 8,
              name: "SENNA CLUB (ven-sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 1691,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 152,
              raceId: 8,
              name: "ELITE RESTAURANT (ven-sam-dim)",
              category: "HOSPITALITY ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 2076,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 153,
              raceId: 8,
              name: "TRIBUNE 1 MAIN STRAIGHT (sam-dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 379,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 154,
              raceId: 8,
              name: "TRIBUNE 1 MAIN STRAIGHT (sam-dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 558,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 155,
              raceId: 8,
              name: "TRIBUNE 12 SENNA CORNER SECTIONS 5,6,7 (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 293,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 156,
              raceId: 8,
              name: "TRIBUNE 12 SENNA CORNER SECTIONS 2,3,4 (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 274,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 157,
              raceId: 8,
              name: "TRIBUNE 11 SENNA CORNER SECTIONS 1,2,3 (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 274,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 158,
              raceId: 8,
              name: "TRIBUNE 11 SENNA CORNER SECTIONS 4,5,6,7 (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 274,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 159,
              raceId: 8,
              name: "TRIBUNE 11 SENNA CORNER SECTION 8 (dim)",
              category: "PREMIUM",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 293,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 160,
              raceId: 8,
              name: "TRIBUNE FAMILIALE ADULTE (sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 181,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 161,
              raceId: 8,
              name: "TRIBUNE 34 EPINGLE HAIRPIN  (sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 207,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 162,
              raceId: 8,
              name: "TRIBUNE 21 EPINGLE HAIRPIN  (sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 274,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 163,
              raceId: 8,
              name: "TRIBUNE LANCE STROLL (sam-dim)",
              category: "TRIBUNE ",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 274,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 164,
              raceId: 8,
              name: "ADMISSION GENERALE (ven)",
              category: "ADMISSION GENERALE",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 35,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 165,
              raceId: 8,
              name: "ADMISSION GENERALE (sam-dim)",
              category: "ADMISSION GENERALE",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 108,
              ticketPrefix: "TP-",
              openBookWebsite: true
          },
          {
              id: 166,
              raceId: 8,
              name: "ADMISSION GENERALE (dim)",
              category: "ADMISSION GENERALE",
              booking_open_at: toMysqlDate("12/25/20"),
              price: 76,
              ticketPrefix: "TP-",
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
