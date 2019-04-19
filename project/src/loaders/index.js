const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');

module.exports = {
    init: async(expressApp) => {
        const mongooseConnection = await mongooseLoader();
        console.log('MongoDB Initialized');

        const expressConnection = await expressLoader(expressApp);
        console.log('Express Initialized');
    }
};