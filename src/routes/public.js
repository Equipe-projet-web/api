import express from 'express';
import validate from 'express-validation';

import * as userController from '../controllers/user/user.controller';
import * as userValidator from '../controllers/user/user.validator';
import {allCircuits, oneCircuit} from "../controllers/circuits/circuit.controller";
import {allOffers, offersByRace, offersByRaceRound, oneOffer} from "../controllers/offers/offer.controller";
import {allRaceRounds, allRaces, oneRace, oneRaceRound} from "../controllers/races/races.controller";
const fs = require('fs');

const router = express.Router();

//= ===============================
// Public routes
//= ===============================

router.post(
  '/login',
  validate(userValidator.login),
  userController.login,
);
router.post(
  '/register',
  validate(userValidator.register),
  userController.register,
);

router.get('/circuits', allCircuits);
router.get('/circuits/:id', oneCircuit);

router.get('/offers', allOffers);
router.get('/offers/:id', oneOffer);

router.get('/offers/by_race/:raceId', offersByRace);
router.get('/offers/by_race_round/:raceRoundId', offersByRaceRound);

router.get('/races', allRaces);
router.get('/races/:id', oneRace);
router.get('/racerounds', allRaceRounds);
router.get('/racerounds/:id', oneRaceRound);

router.get('/races/:id/images', function (req, res) {
    const response = {
        "flag" : "races/" + req.params.id + "/flag.png",
        "circuit": "races/" + req.params.id + "/b.jpg"
    };

    res.send(response);
});

module.exports = router;
