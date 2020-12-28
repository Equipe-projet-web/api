const Joi = require('joi');

export const register = {
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
