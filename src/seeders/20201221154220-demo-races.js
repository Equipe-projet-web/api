'use strict';

function toMysqlDate(value){
    value = value.split('/');
    return new Date(value[2], value[1], value[0]);
}

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
      'Races',
      [
          {
              id: "1",
              name: "Grand Prix d'Australie",
              circuitId: "1",
              startDate: toMysqlDate("19/03/2021"),
              endDate: toMysqlDate("21/03/2021"),
              description: "Un début de saison à la fois formidable et difficile au circuit Albert Park de Melbourne."
          },
          {
              id: "2",
              name: "Grand Prix de Bahrein",
              circuitId: "2",
              startDate: toMysqlDate("26/03/2021"),
              endDate: toMysqlDate("28/03/2021"),
              description: "Une course palpitante qui se déroule la nuit au milieu du désert."
          },
          {
              id: "3",
              name: "Grand Prix de Chine",
              circuitId: "3",
              startDate: toMysqlDate("09/04/2021"),
              endDate: toMysqlDate("11/04/2021"),
              description: "Organisé sur le circuit international de Shanghai, le Grand Prix de Chine est unique en son genre."
          },
          {
              id: "5",
              name: "Grand Prix d'Espagne",
              circuitId: "5",
              startDate: toMysqlDate("07/05/2021"),
              endDate: toMysqlDate("09/05/2021"),
              description: "Un des grands favoris, le circuit de Barcelona-Catalogne ne déçoit jamais"
          },
          {
              id: "6",
              name: "Grand Prix de Monaco",
              circuitId: "6",
              startDate: toMysqlDate("20/05/2021"),
              endDate: toMysqlDate("22/05/2021"),
              description: "Une course pleine d'actions et de rebondissements dans un des circuits les plus difficiles."
          },
          {
              id: "7",
              name: "Grand Prix d'Azerbaijan",
              circuitId: "7",
              startDate: toMysqlDate("04/06/2021"),
              endDate: toMysqlDate("06/06/2021"),
              description: "Découvrez le circuit qui traverse le centre ville et la digue du bord de mer."
          },
          {
              id: "8",
              name: "Grand Prix du Canada",
              circuitId: "8",
              startDate: toMysqlDate("11/06/2021"),
              endDate: toMysqlDate("13/06/2021"),
              description: "Le circuit Gilles-Villeneuve de Montréal accueille un Grand Prix unique et époustouflant."
          },
          {
              id: "9",
              name: "Grand Prix de France",
              circuitId: "9",
              startDate: toMysqlDate("25/06/2021"),
              endDate: toMysqlDate("27/06/2021"),
              description: "Un mélange passionnant d'été et de F1 sur le circuit Paul Ricard du Castellet."
          },
          {
              id: "10",
              name: "Grand Prix d'Autriche",
              circuitId: "10",
              startDate: toMysqlDate("02/07/2021"),
              endDate: toMysqlDate("04/07/2021"),
              description: "Nichée dans les montagnes autrichiennes, écoutez le rugissement de la F1 dans la Red Bull ring."
          },
          {
              id: "11",
              name: "Grand Prix de Grande-Bretagne",
              circuitId: "11",
              startDate: toMysqlDate("16/07/2021"),
              endDate: toMysqlDate("18/07/2021"),
              description: "La maison du sport automobile, une course à l'emblamatique Silverstone est une course que vous ne voulez pas manquer."
          },
          {
              id: "12",
              name: "Grand Prix de Hongrie",
              circuitId: "12",
              startDate: toMysqlDate("30/07/2021"),
              endDate: toMysqlDate("01/08/2021"),
              description: "Situé à Mogyoród, le Hungaroring est l'un des classiques de la saison."
          },
          {
              id: "13",
              name: "Grand Prix de Belgique",
              circuitId: "13",
              startDate: toMysqlDate("27/08/2021"),
              endDate: toMysqlDate("29/08/2021"),
              description: "Le plus long circuit du calendrier, Spa-Francorchamps, offre des courses palpitantes."
          },
          {
              id: "14",
              name: "Grand Prix des Pays-Bas",
              circuitId: "14",
              startDate: toMysqlDate("03/09/2021"),
              endDate: toMysqlDate("05/09/2021"),
              description: "Un circuit classique qui vous garantit une course à sensation, pleine d'adrénaline."
          },
          {
              id: "15",
              name: "Grand Prix d'Italie",
              circuitId: "15",
              startDate: toMysqlDate("10/09/2021"),
              endDate: toMysqlDate("12/09/2021"),
              description: "Au milieu de l'Italie, le \"Temple de la vitesse\" à Monza offre une atmosphère comme nulle part ailleurs."
          },
          {
              id: "16",
              name: "Grand Prix de Russie",
              circuitId: "16",
              startDate: toMysqlDate("24/09/2021"),
              endDate: toMysqlDate("26/09/2021"),
              description: "Découvrez un circuit sinueux représentant un vrai test pour les pilotes et les voitures."
          },
          {
              id: "17",
              name: "Grand Prix de Singapour",
              circuitId: "17",
              startDate: toMysqlDate("01/10/2021"),
              endDate: toMysqlDate("03/10/2021"),
              description: "Assistez au meilleur du spectacle et à la meilleure course du circuit de Marina Bay Street."
          },
          {
              id: "18",
              name: "Grand Prix du Japon",
              circuitId: "18",
              startDate: toMysqlDate("08/10/2021"),
              endDate: toMysqlDate("10/10/2021"),
              description: "Connu comme le favori des pilotes, ce circuit a tout ce qu'un fan de F1 pourrait souhaiter."
          },
          {
              id: "19",
              name: "Grand Prix des Etats-Unis",
              circuitId: "19",
              startDate: toMysqlDate("22/10/2021"),
              endDate: toMysqlDate("24/10/2021"),
              description: "Le Grand Prix des États-Unis est un événement véritablement incontournable."
          },
          {
              id: "20",
              name: "Grand Prix du Mexique",
              circuitId: "20",
              startDate: toMysqlDate("29/10/2021"),
              endDate: toMysqlDate("31/10/2021"),
              description: "Une atmosphère électrique combinée à des courses époustouflantes, bienvenue au Mexique."
          },
          {
              id: "21",
              name: "Grand Prix du Brésil",
              circuitId: "21",
              startDate: toMysqlDate("12/11/2021"),
              endDate: toMysqlDate("14/11/2021"),
              description: "Un public passionné et des courses légendaires pour le Grand Prix du Brésil."
          },
          {
              id: "22",
              name: "Grand Prix d'Arabie Saoudite",
              circuitId: "22",
              startDate: toMysqlDate("26/11/2021"),
              endDate: toMysqlDate("28/11/2021"),
              description: "Introduit pour le calendrier 2021, une nouvelle course sur un nouveau circuit qui s'annonce palpitante."
          },
          {
              id: "23",
              name: "Grand Prix d'Abou Dabi",
              circuitId: "23",
              startDate: toMysqlDate("03/12/2021"),
              endDate: toMysqlDate("05/12/2021"),
              description: "La dernière course de la saison se déroule sur le circuit moderne de Yas Marina."
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
