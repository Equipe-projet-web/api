import {Offer} from '../../models';
import { successResponse, errorResponse } from '../../helpers';


export const allOffers = async (req, res) => {
  try {
    const offers = await Offer.findAndCountAll({
      include: 'RaceRounds',
      order: [['name', 'ASC']],
    });
    return successResponse(req, res, { offers });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const oneOffer = async (req, res) => {
  try {
    const offer = await Offer.findOne({ where: { id: req.params.id }, include: 'RaceRounds' });
    return successResponse(req, res, { offer });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const offersByRace = async (req, res) => {
  try {
    const offer = await Offer.findOne({
      include: [{
        model: 'RaceRounds',
        where: { race_id: req.params.raceId },
        include: [
          {
            model: 'Race',
          }
        ]
      }]
    });
    return successResponse(req, res, { offer });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const offersByRaceRound = async (req, res) => {
  try {
    const offer = await Offer.findOne({
      include: [{
        model: 'RaceRounds',
        where: { id: req.params.raceRoundId },
        include: [
          {
            model: 'Race',
          }
        ]
      }]
    });
    return successResponse(req, res, { offer });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};