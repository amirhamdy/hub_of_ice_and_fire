const config = require('config');
const jwt = require('jsonwebtoken');

exports.generateAuthToken = (user) => {
    const token = jwt.sign({id: user.id, username: user.username}, config.get('jwtPrivateKey'));
    return token;
};