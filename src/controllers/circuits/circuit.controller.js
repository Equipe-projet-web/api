import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import axios from 'axios';
import { Circuits, Races } from '../../models';
import { successResponse, errorResponse } from '../../helpers';


export const allCircuits = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const limit = 2;
    const circuits = await Circuits.findAndCountAll({
      include: 'Race',
      order: [['name', 'ASC']],
      offset: (page - 1) * limit,
      limit,
    });
    return successResponse(req, res, { circuits });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};