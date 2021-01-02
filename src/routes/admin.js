import express from 'express';
import * as userController from '../controllers/user/user.controller';
import {allCircuits, oneCircuit} from "../controllers/circuits/circuit.controller";
import {allOffers, offersByRace, offersByRaceRound, oneOffer} from "../controllers/offers/offer.controller";
import {allRaceRounds, allRaces, oneRace, oneRaceRound} from "../controllers/races/races.controller";
import {
    allBooking,
    allBookingOffers,
    deleteBookingOffer,
    deleteBookingPeople
} from "../controllers/booking/booking.controller";

const router = express.Router();

//= ===============================
// Admin routes
//= ===============================
router.get('/users', userController.allUsers);
router.get('/bookings', allBooking);
router.get('/bookings/offers', allBookingOffers);
router.delete('/bookings/offers/:id/delete', deleteBookingOffer)



module.exports = router;
