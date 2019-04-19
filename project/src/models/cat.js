const mongoose = require('mongoose');
const Joi = require('joi');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 40
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 25
    }
});

const catModel = mongoose.model('Cat', catSchema);

const validateCat = (cat) => {
    const schema = {
        name: Joi.string().min(3).max(40).required(),
        age: Joi.number().min(1).max(25).required()
    };

    return Joi.validate(cat, schema);
};

module.exports = {
    Entity: catModel,
    Validate: validateCat
};
