import express from 'express';
import * as userController from '../controllers/user/user.controller';
import {allRaceRounds} from "../controllers/races/races.controller";
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
router.get('/notifications', allRaceRounds);



module.exports = router;
