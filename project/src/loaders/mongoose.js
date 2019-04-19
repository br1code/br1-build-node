const mongoose = require('mongoose');

module.exports = async () => {
    const connection = await mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true });
    return connection.connection.db;
};