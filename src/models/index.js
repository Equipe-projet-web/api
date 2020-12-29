

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/no-dynamic-require
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  );
}

fs.readdirSync(__dirname)
  .filter(file => (
    file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  ))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// relationships for models

//= ==============================
// Define all relationships here below
//= ==============================
//


db.Circuit.hasMany(db.Race, {foreignKey: 'circuitId', as: 'Races'});
db.Race.hasOne(db.Circuit, { foreignKey: 'id', sourceKey: 'circuitId', as: 'Circuit'});
db.Race.hasMany(db.RaceRound, { foreignKey: 'raceId', sourceKey: 'id', as: 'RaceRounds'});
db.RaceRound.hasOne(db.Race, {foreignKey: 'id', sourceKey: 'raceId', as: 'Race'});
db.Offer.belongsToMany(db.RaceRound, { through: db.OfferRaceRound, as: 'RaceRounds'});
db.RaceRound.belongsToMany(db.Offer, { through: db.OfferRaceRound, as: 'Offers'});
db.Race.hasMany(db.Offer, { foreignKey: 'raceId', sourceKey: 'id', as: 'Offers'});
db.Offer.hasOne(db.Race, { foreignKey: 'id', sourceKey: 'raceId', as: 'Race'});
db.Booking.hasMany(db.OfferBooking, {foreignKey: 'bookingId', sourceKey: 'id'})
db.OfferBooking.hasMany(db.BookingPeople, {foreignKey: 'offerBookingId', sourceKey: 'id'})
db.OfferBooking.hasOne(db.Offer, {foreignKey: 'id', sourceKey: 'offerId'})


module.exports = db;
