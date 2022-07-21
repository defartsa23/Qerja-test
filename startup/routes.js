'use strict';
const {
    notFound,
    error
} = require('../middlewares/error.middleware');
const routesHandler = require('../middlewares/routesHandler.middleware');
const express = require('express');
const api = require('../routes');


module.exports = function (app) {
    app.use(express.urlencoded({extended: true}));
    app.use(express.json({ limit: '50mb' }));

    // routes handler
    app.use(routesHandler);

    app.use('/api/v1/', api);

    // catch 404 and forward to error handler
    app.use(notFound);

    // error handler
    app.use(error);
}