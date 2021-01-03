const Joi = require('joi');

export const store = {
    body: {
        email: Joi.string()
            .email()
            .required(),
    },
};
