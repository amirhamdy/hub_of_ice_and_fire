/*
const crypto = require('crypto');
const bcrypt = require("bcrypt");
const _ = require("lodash");
var emailvalidator = require("email-validator");
const { Token } = require('../models/token');
*/

const models = require("../models/index");
const { validate } = require("../validations/user");

exports.profile = function(req, res) {
  res.send("get - user profile is here!");
};

/*
    This function creates a new user. When a user is created, a token is generated and an email is sent to the registered email
    to verify that it's a valid email and that he/she is the owner of this email.
*/
exports.register = async function(req, res) {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error);

  let user = await models.User.findOne({ where: { email: req.body.email } });
  if (user) return res.status(400).send("Email already registered.");

  let user = await models.User.findOne({ where: { username: req.body.username } });
  if (user) return res.status(400).send("Username already used.");

  user = new models.User(
    _.pick(req.body, ["firstName", "lastName", "username", "email"])
  );

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();

  res.send(_.pick(user, ["_id", "username", "email"]));
};
