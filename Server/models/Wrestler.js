const { Schema, model } = require('mongoose');

const wrestlerSchema = new Schema({
    wrestlerName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

const Wrestler = model('Wrestler', wrestlerSchema);

module.exports = Wrestler;