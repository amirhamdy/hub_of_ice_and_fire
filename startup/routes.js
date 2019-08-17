const express = require('express');
const auth = require('../routes/auth');
const users = require('../routes/users');
const error = require('../middleware/error');

module.exports = function (app) {
    app.use(express.json());
    app.use('/auth', auth);
    app.use('/users', users);
    app.use('*', (req, res) => {
        res.status(404).send('404');
    });
    app.use(error);
};