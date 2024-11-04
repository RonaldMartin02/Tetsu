const { Schema, model } = require('mongoose');

const wrestlersSchema = new Schema({
    wrestlerName: {
        type: String,
        required: true
    },
});

const matchSchema = new Schema({
matchType: {
    type: String,
    required: true
},
Wrestlers:[wrestlersSchema],
matchWinner: {
    type: String,
    required: true
},
videoId: {
    type: String,
    required: true
}
});
const showSchema = new Schema({
    showBanner: {
        type: String,
        required: true
    },
    showDate: {
        type: String,
        required: true
    },
    DoorsOpen: {
        type: String,
        required: true
    },
    showTime: {
        type: String,
        required: true
    },
    showLocation: {
        type: String,
        required: true
    },
    showName: {
        type: String,
        required: true
    },
    showPrice: {
        type: Number,
        required: true
    },
    results: [matchSchema]
});

const Show = model('Show', showSchema);

module.exports = Show;