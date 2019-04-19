module.exports = (req, res, next) => {
    console.log('Someone made a request to the server');
    next();
};