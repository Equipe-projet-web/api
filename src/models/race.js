const Circuit = require('../models/circuit');

module.exports = (sequelize, DataTypes) => {
  const Race = sequelize.define('Race', {
    name: {type: DataTypes.STRING, allowNull: false},
    circuitId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Circuit,
        key: "circuitId"
      }
    },

    startDate: {type: DataTypes.DATE, allowNull: false},
    endDate: {type: DataTypes.DATE, allowNull: false},
    description: DataTypes.TEXT
  }, {});
  Race.associate = function(models) {

  };
  return Race;
};