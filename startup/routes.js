const express = require('express');
const auth = require('../routes/auth');
const users = require('../routes/users');
const posts = require('../routes/posts');
const home = require('../routes/home');
const error = require('../middleware/error');

module.exports = function (app) {
    app.use(express.json());
    app.use('/auth', auth);
    app.use('/users', users);
    app.use('/posts', posts);
    app.use('/', home);
    app.use('*', (req, res) => {
        res.status(404).send('404');
    });
    app.use(error);
};