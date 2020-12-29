const Joi = require('joi');

export const store = {
    body: {
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string()
            .email()
            .required(),
        phone: Joi.string().required(),
        city: Joi.string().required(),
        address: Joi.string().required(),
    },
};

export const offer = {
    body: {
        offerId: Joi.string().required(),
        count: Joi.string().required(),
    },
};
