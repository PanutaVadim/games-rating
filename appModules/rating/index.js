const config = require('./config');
const makeRatingFile = require('./rating-file')
const { createRating, updateRating } = require('./calculations.js');

module.exports = {
    config,
    makeRatingFile,
    createRating,
    updateRating,
}