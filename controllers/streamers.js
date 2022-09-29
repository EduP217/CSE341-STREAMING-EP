const streamerSchema = require("../models/streamers");

const all = async (req, res) => {
    await streamerSchema.find()
        .then((data) => res.json(data))
        .catch((err) => res.json({error : err}));
}

const findById = async (req, res) => {
    const { id } = req.params;

    await streamerSchema.findById(id)
        .then((data) => res.json(data))
        .catch((err) => res.json({error : err}));
}

module.exports = {
    all,
    findById
}