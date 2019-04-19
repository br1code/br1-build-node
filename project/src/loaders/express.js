const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const apiRoutes = require('../api');

const { middleware } = require('../services');

const logger = middleware.loggerMiddleware;

module.exports = async(app) => {

    app.get('/status', (req, res) => { res.status(200).end(); });
    app.head('/status', (req, res) => { res.status(200).end(); });
    app.enable('trust proxy');

    app.use(cors());
    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(logger);

    app.use(apiRoutes);

    app.get('*', (req, res) => {  res.status(404).json({ error: 'Route not found' }); });

    return app;
};