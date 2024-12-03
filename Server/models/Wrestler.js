const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
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

const Wrestler = model('Wrestler', employeeSchema);

module.exports = Wrestler;