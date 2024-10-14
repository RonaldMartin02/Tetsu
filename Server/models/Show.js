const { Schema, model } = require('mongoose');

const showSchema = new Schema({
    showBanner: {
        type: String,
        required: true
    },
    showDate: {
        type: Date,
        required: true
    },
});

const Show = model('Build', postSchema);

module.exports = Show;