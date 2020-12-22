import express from 'express';
import * as userController from '../controllers/user/user.controller';
import {allCircuits, oneCircuit} from "../controllers/circuits/circuit.controller";

const router = express.Router();

//= ===============================
// Admin routes
//= ===============================
router.get('/users', userController.allUsers);

router.get('/circuits', allCircuits);
router.get('/circuits/:id', oneCircuit);

module.exports = router;
