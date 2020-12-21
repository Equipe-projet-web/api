import express from 'express';
import * as userController from '../controllers/user/user.controller';
import {allCircuits} from "../controllers/circuits/circuit.controller";

const router = express.Router();

//= ===============================
// Admin routes
//= ===============================
router.get('/allUsers', userController.allUsers);

router.get('/circuits', allCircuits);

module.exports = router;
