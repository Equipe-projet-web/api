import {Circuit} from '../../models';
import { successResponse, errorResponse } from '../../helpers';


export const allCircuits = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const limit = 2;
    const circuits = await Circuit.findAndCountAll({
      include: 'Races',
      order: [['name', 'ASC']],
      offset: (page - 1) * limit,
      limit,
    });
    return successResponse(req, res, { circuits });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const oneCircuit = async (req, res) => {
  try {
    const circuit = await Circuit.findOne({ where: { id: req.params.id }, include: 'Races' });
    return successResponse(req, res, { circuit });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
