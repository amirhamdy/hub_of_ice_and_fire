const _ = require("lodash");
const bcrypt = require("bcrypt");
const {User} = require("../models");
const {generateAuthToken} = require('../misc/generateToken')
const {validate} = require("../validations/user");

exports.index = async function (req, res) {
    res.send('All users - just for testing!');
};

// This function views user profile.
exports.profile = async function (req, res) {
    const username = req.params.username;
    if (!username) return res.status(400).send('Invalid username.');

    const user = await User.findOne({where: {username: username}});
    if (!user) return res.status(400).send("User does not exist.");

    res.send(_.pick(user, ["id", "firstName", "lastName", "username", "email"]));
};

// This function creates a new user.
exports.register = async function (req, res) {
    const {error} = validate(req.body);
    if (error) return res.status(400).send(error);

    let user = await User.findOne({where: {email: req.body.email}});
    if (user) return res.status(400).send("Email already registered.");

    user = await User.findOne({where: {username: req.body.username}});
    if (user) return res.status(400).send("Username already used.");

    user = new User(
        _.pick(req.body, ["firstName", "lastName", "username", "email", "password"])
    );

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = generateAuthToken(user);
    res.header('x-auth-token', token).send(_.pick(user, ["id", "username", "email"]));
};
