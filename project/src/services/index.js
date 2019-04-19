const catService = require('./catService');
const loggerMiddleware = require('./middleware/logger');

// Registration for services and middleware
module.exports = {
    services: {
        catService
    },
    middleware: {
        loggerMiddleware
    }
};