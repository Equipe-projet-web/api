import express from 'express';
import * as userController from '../controllers/user/user.controller';
import {allCircuits, oneCircuit} from "../controllers/circuits/circuit.controller";
import {allOffers, offersByRace, offersByRaceRound, oneOffer} from "../controllers/offers/offer.controller";
import {allRaceRounds, allRaces, oneRace, oneRaceRound} from "../controllers/races/races.controller";

const router = express.Router();

//= ===============================
// Admin routes
//= ===============================
router.get('/users', userController.allUsers);

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


module.exports = router;
