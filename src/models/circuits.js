
module.exports = (sequelize, DataTypes) => {
  const Circuits = sequelize.define('Circuits', {
    name: {type : DataTypes.STRING, allowNull: false, unique: true },
    color: {type : DataTypes.STRING, allowNull: false},
    laps: {type : DataTypes.INTEGER, allowNull: true},
    length: {type : DataTypes.FLOAT, allowNull: false},
    description:  DataTypes.TEXT
  }, {});
  Circuits.associate = (models) => {

  };
  return Circuits;
};