import {Booking, OfferBooking, BookingPeople, Offer, Race} from '../../models';
import {successResponse, errorResponse, uniqueId} from '../../helpers';

export const allBooking = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      include : [
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
    return successResponse(req, res, { bookings });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const allBookingOffers = async (req, res) => {
  try {
    const bookingOffers = await OfferBooking.findAll({
      include : [
        {
          model: BookingPeople
        },
        {
          model: Booking
        },
        {
          model: Offer,
          include : [
            'Race'
          ]
        }
      ],
      order: [['createdAt', 'DESC']],
    });
    return successResponse(req, res, { bookingOffers });
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

export const invitation = async (req, res) => {
  try {
    const {
      firstName, lastName, email
    } = req.body;

    const payload = {
      firstName,
      lastName,
      email,
      bookingId : req.params.bookingId,
      offerBookingId: req.params.offerBookingId
    };

    const bookingPeople = await BookingPeople.create(payload);
    return successResponse(req, res, {bookingPeople});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const deleteBookingPeople = async (req, res) => {
  try {
    const bookingPeople = await BookingPeople.findOne({
      where: {
        id: req.params.id
      }
    });
    await bookingPeople.destroy();
    return successResponse(req, res);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const deleteBookingOffer = async (req, res) => {
  try {
    const bookingOffer = await OfferBooking.findOne({
      where: {
        id: req.params.id
      }
    });
    await bookingOffer.destroy();
    return successResponse(req, res);
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
