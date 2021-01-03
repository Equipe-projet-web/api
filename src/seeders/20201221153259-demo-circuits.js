'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
      'Circuits',
      [
          {
              id: 1,
              name: "Albert Park",
              color: "#555",
              length: 5.303,
              description: "Albert Park est une banlieue de Melbourne. Cette bourgade qui compte 58 329 habitants est située à 2 kilomètres au sud de Melbourne. Elle doit son nom au prince Albert, époux de la Reine Victoria. Deux parcs et un lac donnent à cette banlieue un certain cachet. Albert Park est fameux dans le monde du sport."
          },
          {
              id: 2,
              name: "Bahrain International Circuit",
              color: "#556",
              length: 5.412,
              description: "Le circuit international de Sakhir est le circuit du Grand Prix de Bahreïn de Formule 1 inauguré en 2004 lors du Grand Prix de Bahreïn 2004. Il est basé à Manama, la capitale de Bahreïn. Dans sa première configuration, Sakhir se caractérise par une succession de courtes lignes droites et de virages lents."
          },
          {
              id: 3,
              name: "Shanghai International Circuit",
              color: "#557",
              length: 5.451,
              description: "Le circuit international de Shanghai est un circuit permanent de sports mécaniques localisé à Shanghai (district de Jiading) en Chine, il a été inauguré le 6 juin 2004. Il se caractérise, comme tous les circuits d'Hermann Tilke, par une succession de courtes lignes droites et de virages serrés, afin de favoriser les dépassements. Cependant, les grandes courbes rapides qui mettent en avant les qualités de pilotage des pilotes sont absentes."
          },
          {
              id: 4,
              name: "NULL",
              color: "#558",
              length: 0
          },
          {
              id: 5,
              name: "Circuit de Catalunya",
              color: "#559",
              length: 4.655,
              description: "Le circuit de Barcelone-Catalogne (anciennement Circuit de Catalogne) est un circuit situé à Montmeló, au nord de Barcelone, en Catalogne, Espagne. Avec ses longues lignes droites et ses virages variés, il est également utilisé pour réaliser de nombreux essais (notamment chaque année pour les essais de pré-saison de la Formule 1) ce qui en fait l'un des circuits les plus connus des pilotes."
          },
          {
              id: 6,
              name: "Monaco",
              color: "#560",
              length: 3.337,
              description: "Le circuit de Monaco est un circuit automobile temporaire empruntant les rues de la ville de Monaco, dans les quartiers de La Condamine et Monte-Carlo. Son tracé non permanent installé au cœur de la ville de Monaco pour les quelques jours que dure le Grand Prix, est le plus lent du championnat du monde de Formule 1. L'étroitesse des voies, sinueuses et bordées de rails, demande une concentration absolue."
          },
          {
              id: 7,
              name: "Baku City Circuit",
              color: "#561",
              length: 6.003,
              description: "Le circuit urbain de Bakou est un circuit automobile temporaire situé près du parc maritime de Bakou, à Bakou, en Azerbaïdjan. Il a accueilli pour la première fois le Grand Prix d'Europe de Formule 1, le 19 juin 2016. Il est ensuite renommé en Grand Prix d'Azerbaïdjan en 2017."
          },
          {
              id: 8,
              name: "Circuit Gilles Villeneuve",
              color: "#562",
              length: 4.361,
              description: "Le circuit Gilles-Villeneuve est un circuit de sports mécaniques situé au parc Jean-Drapeau sur l'île Notre-Dame, au milieu du Fleuve Saint-Laurent, à Montréal, Canada. Il porte son nom en l'honneur du pilote canadien Gilles Villeneuve, qui y obtint sa première victoire en 1978, et qui se tua lors de la séance de qualification du Grand-Prix de Formule 1 de Belgique à Zolder le 8 mai 1982. Sur l'emplacement de la ligne de départ est inscrit « Salut Gilles »."
          },
          {
              id: 9,
              name: "Paul Ricard",
              color: "#563",
              length: 5.842,
              description: "Le circuit Paul-Ricard (CPR), appelé aussi « circuit du Castellet », est un circuit automobile français situé dans le département du Var près des communes de Signes et du Castellet. Le circuit est né en 1970 sous l'impulsion de Paul Ricard, un temps maire du village de Signes voisin du site, qui voulait créer un évènement d'ampleur internationale dans la région."
          },
          {
              id: 10,
              name: "Red Bull Ring",
              color: "#564",
              length: 4.318,
              description: "Le circuit de Spielberg, auparavant appelé Österreichring puis A1-Ring et désormais Red Bull Ring, est un circuit automobile situé dans la commune de Spielberg en Autriche.Circuit très technique, il est connu pour avoir accueilli le Grand Prix automobile d'Autriche pendant dix-huit ans, de 1970 à 1987. "
          },
          {
              id: 11,
              name: "Silverstone",
              color: "#565",
              length: 5.891,
              description: "Le circuit de Silverstone a été le théâtre de la première course de Formule 1 comptant pour le championnat du monde, le 13 mai 1950, puis a accueilli en alternance avec d'autres circuits le Grand Prix automobile de Grande-Bretagne de Formule 1, jusqu'en 1987 où il est devenu l'hôte permanent de cette épreuve."
          },
          {
              id: 12,
              name: "Hungaroring",
              color: "#566",
              length: 4.381,
              description: "Le Hungaroring est un circuit automobile situé à Mogyoród, à 18 kilomètres au nord-est de Budapest, en Hongrie. Lors de sa création, il devient le lieu du premier Grand Prix derrière le « rideau de fer ». Il est surnommé le « tourniquet » en raison de ses enchaînements incessants de virages, en particulier dans le deuxième secteur. C'est un circuit lent, bosselé et étroit"
          },
          {
              id: 13,
              name: "Spa-Francorchamps",
              color: "#567",
              length: 7.004,
              description: "Le circuit de Spa-Francorchamps est un circuit automobile situé à proximité de Francorchamps dans la province de Liège, en Belgique. C'est un des circuits préférés des pilotes en raison de la variété de son tracé dans le paysage montueux de l'Ardenne belge qui permet aux pilotes de mettre leur talent en valeur."
          },
          {
              id: 14,
              name: "Circuit Park Zandvoort",
              color: "#568",
              length: 4.259,
              description: "Le circuit de Zandvoort est un circuit automobile néerlandais tracé entre les dunes au sud du parc national Zuid-Kennemerland, dans la commune de Zandvoort (Hollande-Septentrionale), à une vingtaine de kilomètres à l'ouest d'Amsterdam."
          },
          {
              id: 15,
              name: "Autodromo Nazionale di Monza",
              color: "#569",
              length: 5.793,
              description: "L'Autodromo Nazionale di Monza est un circuit automobile situé dans le Parco Reale de 800 hectares de la ville de Monza, au nord de Milan en Italie. Il est principalement connu pour accueillir, chaque année, le Grand Prix d'Italie dans le cadre du Championnat du monde de Formule 1 et être le fief des « tifosi », supporters de l'écurie italienne Scuderia Ferrari."
          },
          {
              id: 16,
              name: "Sochi Autodrom",
              color: "#570",
              length: 5.848,
              description: "L'autodrome de Sotchi, initialement dénommé circuit urbain international de Sotchi, est un circuit automobile temporaire conçu par Hermann Tilke qui serpente au milieu des installations olympiques où se sont déroulés, en février 2014, les XXIIᵉˢ Jeux olympiques d'hiver. "
          },
          {
              id: 17,
              name: "Singapour",
              color: "#571",
              length: 5.063,
              description: "Le circuit urbain de Singapour est un circuit urbain tracé autour de Marina Bay, cœur historique de Singapour, et qui accueille chaque année depuis 2008 le Grand Prix automobile de Singapour. Le tracé longe le port à la manière du circuit de Monaco, et comporte 23 virages."
          },
          {
              id: 18,
              name: "Suzuka",
              color: "#572",
              length: 5.807,
              description: "Le circuit de Suzuka est l'un des circuits les plus populaires de sports mécaniques. Situé à Suzuka, soit à 50 km de Nagoya et 150 km d'Osaka, il a été conçu par le designer néerlandais John Hugenholtz à la demande personnelle de Soichiro Honda comme piste d'essai pour la marque. Depuis son ouverture, il a accueilli de très nombreuses manifestations, tant moto qu'auto. Ce circuit présente la particularité d'être en huit et non en boucle, un pont enjambant un secteur de piste."
          },
          {
              id: 19,
              name: "Circuit of the Americas",
              color: "#573",
              length: 5.513,
              description: "Le circuit des Amériques est un circuit automobile situé dans le village d'Elroy, à proximité de la ville d'Austin, dans l'État du Texas aux États-Unis. C'est le premier circuit construit spécialement aux États-Unis pour accueillir un Grand Prix de Formule 1."
          },
          {
              id: 20,
              name: "Autodromo Hermanos Rodriguez",
              color: "#574",
              length: 4.304,
              description: "L'Autódromo Hermanos Rodríguez est un circuit automobile situé à Mexico, au Mexique. Son nom est un hommage aux frères Ricardo et Pedro Rodríguez, parmi les plus grands représentant du sport automobile mexicain à cette époque, décédés sur les circuits en 1962 et 1971. Le circuit a une surface très bosselée, principalement du fait que Mexico se trouve sur une région géologiquement active."
          },
          {
              id: 21,
              name: "Interlagos",
              color: "#575",
              length: 4.309,
              description: "L'Autódromo José Carlos Pace est un des circuits sur lequel se tient le Grand Prix automobile du Brésil en Formule 1. Il est situé dans le quartier d'Interlagos, dans la zone sud de la ville de São Paulo. Il tient son nom de l'ancien pilote de F1 José Carlos Pace, mort en 1977 dans un accident d'avion. Néanmoins, il est encore largement connu sous son ancien nom de « circuit d'Interlagos »."
          },
          {
              id: 22,
              name: "Djeddah",
              color: "#576",
              length: 5.102,
              description: "Le Jeddah Street Circuit est le futur circuit routier de Formule 1 pour le Grand Prix d'Arabie Saoudite qui aura lieu en novembre 2021, à Djeddah. Le tracé comptera 18 virages, il doit faire tampon le temps d'avoir le futur circuit international permanent."
          },
          {
              id: 23,
              name: "Yas Marina",
              color: "#577",
              length: 5.554,
              description: "Le Circuit Yas Marina est un circuit automobile construit pour accueillir le Grand Prix automobile d'Abou Dabi de Formule 1 dont la première édition s'est tenue le 1er novembre 20093. Ce circuit moderne est situé sur l'île de Yas, à 30 minutes d'Abou Dabi, et est le second circuit de Formule 1 implanté au Moyen-Orient après celui de Sakhir à Manama au Bahreïn. "
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
