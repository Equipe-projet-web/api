import {Race, RaceRound} from '../../models';
import { successResponse, errorResponse } from '../../helpers';
import Sequelize from 'sequelize';

export const allRaces = async (req, res) => {
  try {
    const races = await Race.findAndCountAll({
      include: [
        'RaceRounds', 'Circuit', 'Offers'
      ],
      order: [['startDate', 'ASC']],
    });
    return successResponse(req, res, { races });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const randomRace = async (req, res) => {
  try {
    const race = await Race.findOne({
      order: [
        [ Sequelize.fn('RANDOM') ]
      ],
      include: [
        'Circuit', 'Offers'
      ],
    });
    return successResponse(req, res, { race });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const oneRace = async (req, res) => {
  try {
    const race = await Race.findOne({
      where: { id: req.params.id },
      include: [
        'RaceRounds', 'Circuit', 'Offers'
      ],
    });
    return successResponse(req, res, { race });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const allRaceRounds = async (req, res) => {
  try {
    const raceRounds = await RaceRound.findAndCountAll({
      include: ['Race', 'Offers'],
      order: [['name', 'ASC']],
    });
    return successResponse(req, res, { raceRounds });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const oneRaceRound = async (req, res) => {
  try {
    const raceRound = await RaceRound.findOne({
      where: { id: req.params.id },
      include: ['Race', 'Offers']
    });
    return successResponse(req, res, { raceRound });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
