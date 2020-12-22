import express from 'express';
import * as userController from '../controllers/user/user.controller';
import {allCircuits, oneCircuit} from "../controllers/circuits/circuit.controller";
import {allOffers, oneOffer} from "../controllers/offers/offer.controller";

const router = express.Router();

//= ===============================
// Admin routes
//= ===============================
router.get('/users', userController.allUsers);

router.get('/circuits', allCircuits);
router.get('/circuits/:id', oneCircuit);

router.get('/offers', allOffers);
router.get('/offers/:id', oneOffer);


module.exports = router;
