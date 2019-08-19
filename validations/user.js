const Joi = require("joi");

function validateUser(user) {

    const schema = {
        firstName: Joi.string().min(4).max(50).required(),
        lastName: Joi.string().min(4).max(50).required(),
        username: Joi.string().min(4).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(user, schema);
}

exports.validate = validateUser;
