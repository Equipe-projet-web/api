
module.exports = (sequelize, DataTypes) => {
  const Circuit = sequelize.define('Circuit', {
    name: {type : DataTypes.STRING, allowNull: false, unique: true },
    color: {type : DataTypes.STRING, allowNull: false},
    laps: {type : DataTypes.INTEGER, allowNull: true},
    length: {type : DataTypes.FLOAT, allowNull: false},
    description:  DataTypes.TEXT
  }, {});
  Circuit.associate = (models) => {

  };
  return Circuit;
};