const express = require('express');
const loaders = require('./loaders');
const config = require('./config');

async function startServer() {
    const app = express();

    await loaders.init(app);

    app.listen(process.env.port, err => {
        if (err) return console.log(err);
        console.log('Server listening at port ' + process.env.port);
    });
}

startServer();