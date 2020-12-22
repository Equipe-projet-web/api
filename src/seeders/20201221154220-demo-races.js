'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
      'Races',
      [
          {
              id: "1",
              name: "Grand Prix d'Australie",
              circuitId: "1",
              startDate: "19-Mar",
              endDate: "21-Mar",
              description: "Un début de saison à la fois formidable et difficile au circuit Albert Park de Melbourne."
          },
          {
              id: "2",
              name: "Grand Prix de Bahrein",
              circuitId: "2",
              startDate: "26-Mar",
              endDate: "28-Mar",
              description: "Une course palpitante qui se déroule la nuit au milieu du désert."
          },
          {
              id: "3",
              name: "Grand Prix de Chine",
              circuitId: "3",
              startDate: "9-Apr",
              endDate: "11-Apr",
              description: "Organisé sur le circuit international de Shanghai, le Grand Prix de Chine est unique en son genre."
          },
          {
              id: "4",
              name: "Grand Prix TBC",
              circuitId: "4",
              startDate: "23-Apr",
              endDate: "25-Apr",
              description: "Grand Prix pas encore déterminé."
          },
          {
              id: "5",
              name: "Grand Prix d'Espagne",
              circuitId: "5",
              startDate: "7-May",
              endDate: "9-May",
              description: "Un des grands favoris, le circuit de Barcelona-Catalogne ne déçoit jamais"
          },
          {
              id: "6",
              name: "Grand Prix de Monaco",
              circuitId: "6",
              startDate: "20-May",
              endDate: "22-May",
              description: "Une course pleine d'actions et de rebondissements dans un des circuits les plus difficiles."
          },
          {
              id: "7",
              name: "Grand Prix d'Azerbaijan",
              circuitId: "7",
              startDate: "4-Jun",
              endDate: "6-Jun",
              description: "Découvrez le circuit qui traverse le centre ville et la digue du bord de mer."
          },
          {
              id: "8",
              name: "Grand Prix du Canada",
              circuitId: "8",
              startDate: "11-Jun",
              endDate: "13-Jun",
              description: "Le circuit Gilles-Villeneuve de Montréal accueille un Grand Prix unique et époustouflant."
          },
          {
              id: "9",
              name: "Grand Prix de France",
              circuitId: "9",
              startDate: "25-Jun",
              endDate: "27-Jun",
              description: "Un mélange passionnant d'été et de F1 sur le circuit Paul Ricard du Castellet."
          },
          {
              id: "10",
              name: "Grand Prix d'Autriche",
              circuitId: "10",
              startDate: "2-Jul",
              endDate: "4-Jul",
              description: "Nichée dans les montagnes autrichiennes, écoutez le rugissement de la F1 dans la Red Bull ring."
          },
          {
              id: "11",
              name: "Grand Prix de Grande-Bretagne",
              circuitId: "11",
              startDate: "16-Jul",
              endDate: "18-Jul",
              description: "La maison du sport automobile, une course à l'emblamatique Silverstone est une course que vous ne voulez pas manquer."
          },
          {
              id: "12",
              name: "Grand Prix de Hongrie",
              circuitId: "12",
              startDate: "30-Jul",
              endDate: "1-Aug",
              description: "Situé à Mogyoród, le Hungaroring est l'un des classiques de la saison."
          },
          {
              id: "13",
              name: "Grand Prix de Belgique",
              circuitId: "13",
              startDate: "27-Aug",
              endDate: "29-Aug",
              description: "Le plus long circuit du calendrier, Spa-Francorchamps, offre des courses palpitantes."
          },
          {
              id: "14",
              name: "Grand Prix des Pays-Bas",
              circuitId: "14",
              startDate: "3-Sep",
              endDate: "5-Sep",
              description: "Un circuit classique qui vous garantit une course à sensation, pleine d'adrénaline."
          },
          {
              id: "15",
              name: "Grand Prix d'Italie",
              circuitId: "15",
              startDate: "10-Sep",
              endDate: "12-Sep",
              description: "Au milieu de l'Italie, le \"Temple de la vitesse\" à Monza offre une atmosphère comme nulle part ailleurs."
          },
          {
              id: "16",
              name: "Grand Prix de Russie",
              circuitId: "16",
              startDate: "24-Sep",
              endDate: "26-Sep",
              description: "Découvrez un circuit sinueux représentant un vrai test pour les pilotes et les voitures."
          },
          {
              id: "17",
              name: "Grand Prix de Singapour",
              circuitId: "17",
              startDate: "1-Oct",
              endDate: "3-Oct",
              description: "Assistez au meilleur du spectacle et à la meilleure course du circuit de Marina Bay Street."
          },
          {
              id: "18",
              name: "Grand Prix du Japon",
              circuitId: "18",
              startDate: "8-Oct",
              endDate: "10-Oct",
              description: "Connu comme le favori des pilotes, ce circuit a tout ce qu'un fan de F1 pourrait souhaiter."
          },
          {
              id: "19",
              name: "Grand Prix des Etats-Unis",
              circuitId: "19",
              startDate: "22-Oct",
              endDate: "24-Oct",
              description: "Le Grand Prix des États-Unis est un événement véritablement incontournable."
          },
          {
              id: "20",
              name: "Grand Prix du Mexique",
              circuitId: "20",
              startDate: "29-Oct",
              endDate: "31-Oct",
              description: "Une atmosphère électrique combinée à des courses époustouflantes, bienvenue au Mexique."
          },
          {
              id: "21",
              name: "Grand Prix du Brésil",
              circuitId: "21",
              startDate: "12-Nov",
              endDate: "14-Nov",
              description: "Un public passionné et des courses légendaires pour le Grand Prix du Brésil."
          },
          {
              id: "22",
              name: "Grand Prix d'Arabie Saoudite",
              circuitId: "22",
              startDate: "26-Nov",
              endDate: "28-Nov",
              description: "Introduit pour le calendrier 2021, une nouvelle course sur un nouveau circuit qui s'annonce palpitante."
          },
          {
              id: "23",
              name: "Grand Prix d'Abou Dabi",
              circuitId: "23",
              startDate: "3-Dec",
              endDate: "5-Dec",
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
