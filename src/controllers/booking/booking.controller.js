import {Booking, OfferBooking, BookingPeople, Offer, Race} from '../../models';
import {successResponse, errorResponse, uniqueId} from '../../helpers';

export const allBooking = async (req, res) => {
  try {
    const circuits = await Booking.findAndCountAll();
    return successResponse(req, res, { circuits });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const oneBooking = async (req, res) => {
  try {
    const booking = await Booking.findOne({
      where: { referenceWebsite: req.params.referenceWebsite },
      include: [
        {
          model: OfferBooking,
          include : [
            {
              model: BookingPeople
            },
            {
              model: Offer,
              include : [
               'Race'
              ]
            }
          ]
        }
      ]
    });
    return successResponse(req, res, { booking });
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
      referenceWebsite: referenceGenerator()
    };

    const booking = await Booking.create(payload);
    return successResponse(req, res, {booking});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const storeBookingOffer = async (req, res) => {
  try {
    const {
      offerId, count
    } = req.body;
    console.log("Express", req.body);

    const payload = {
      bookingId : req.params.id,
      offerId,
      count: parseInt(count),
    };

    const offerBooking = await OfferBooking.create(payload);
    return successResponse(req, res, {offerBooking});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};


function referenceGenerator() {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 15).toUpperCase() + '-xxxx-F1-2021-xxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  }).toUpperCase();
}
