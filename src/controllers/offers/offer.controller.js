import {Offer} from '../../models';
import { successResponse, errorResponse } from '../../helpers';


export const allOffers = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const limit = 2;
    const offers = await Offer.findAndCountAll({
      include: 'Races',
      order: [['name', 'ASC']],
      offset: (page - 1) * limit,
      limit,
    });
    return successResponse(req, res, { offers });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const oneOffer = async (req, res) => {
  try {
    const offer = await Offer.findOne({ where: { id: req.params.id }, include: 'Races' });
    return successResponse(req, res, { offer });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
