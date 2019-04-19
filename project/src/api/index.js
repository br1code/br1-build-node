const express = require('express');

const router = express.Router();

const catsController = require('./controllers/catsController');

// Registration of the controllers for the endpoints
router.use(catsController);

module.exports = router;