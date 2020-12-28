import {Booking} from '../../models';
import {successResponse, errorResponse, uniqueId} from '../../helpers';

export const allBooking = async (req, res) => {
  try {
    const circuits = await Booking.findAndCountAll();
    return successResponse(req, res, { circuits });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const storeBooking = async (req, res) => {
  try {
    const {
      email, firstName, lastName, phone, address, city
    } = req.body;

    const payload = {
      email,
      firstName,
      lastName : lastName.toUpperCase(),
      phone,
      address: address.toUpperCase(),
      city: city.toUpperCase(),
      referenceWebsite: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 15).toUpperCase()
    };

    const booking = await Booking.create(payload);
    return successResponse(req, res, {booking});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

