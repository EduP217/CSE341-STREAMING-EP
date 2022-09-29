const mongoose = require("mongoose");

const streamerSchema = mongoose.Schema({
    name: {
        type: String
    },
    nickname: {
        type: String
    },
    event: {
        type: String
    },
    country: {
        type: String
    },
    "date-scheduled": {
        type: String
    },
    session: {
        viewers: {
            type: Number
        },
        followers: {
            type: Number
        },
        "datetime-start": {
            type: String
        },
        "datetime-end": {
            type: String
        }
    },
    status: {
        type: String
    }
});

module.exports = mongoose.model("streamers", streamerSchema);