/*
const Joi = require('joi');
const bcrypt = require('bcrypt');
const _ = require('lodash');
// const User = require('../models/user');

const crypto = require('crypto');
const bcrypt = require("bcrypt");
const _ = require("lodash");
var emailvalidator = require("email-validator");
const { Token } = require('../models/token');
const sendmail = require('../misc/sendEmail');
*/


/*
exports.login = async (req, res) => {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // console.log(User);

    models.user.findOne({where: {title: 'aProject'}}).then(user => {
        console.log(user);
    });

    // let user = await User.findOne({where: {email: req.body.email}});
    // if (!user) return res.status(400).send('Invalid email or password.');

    // const validPassword = await bcrypt.compare(req.body.password, user.password);
    // if (!validPassword) return res.status(400).send('Invalid email or password.');

    // const token = user.generateAuthToken();
    res.send('token');
};

*/
/*
function validate(req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        password: Joi.string().min(5).max(255).required()
    };

    return Joi.validate(req, schema);
}*/
exports.login = async (req, res) => {
    res.send('LOGIN');
};