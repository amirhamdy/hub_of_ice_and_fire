/*
const crypto = require('crypto');
const bcrypt = require("bcrypt");
const _ = require("lodash");
var emailvalidator = require("email-validator");
const { User, validate } = require("../models/user");
const { Token } = require('../models/token');
*/

exports.profile = function(req, res) {
    res.send("get - user profile is here!");
};

/*
    This function creates a new user. When a user is created, a token is generated and an email is sent to the registered email
    to verify that it's a valid email and that he/she is the owner of this email.
*/
exports.register = async function(req, res) {
/*
    const error = validate(req.body);
    if (error) return res.status(400).send(error);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("Email already registered.");

    user = await User.findOne({ phone: req.body.phone });
    if (user) return res.status(400).send("Phone Number already registered.");

    user = new User(
        _.pick(req.body, [
            "name",
            "email",
            "password",
            "phone",
            "gender",
            "dob"
        ])
    );
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') })

    await token.save();

    // send the confirmation email:
    const to = req.body.email;
    const subject = 'Account Verification';
    const body = 'Hello,\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' +
        req.headers.host + '\/api\/users' +'\/confirmation\/'+ user.email + '\/' + token.token + '.\n';

    await sendmail(to, subject, body);

    res.send(_.pick(user, ["_id", "name", "email", "phone"]));
*/

    res.send('register');
};