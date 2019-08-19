const Joi = require("joi");

function validateUser(post) {

    const schema = {
        content: Joi.string().min(1).max(140).required(),
        userId: Joi.number().integer().required()
    };

    return Joi.validate(post, schema);
}

exports.validate = validateUser;
