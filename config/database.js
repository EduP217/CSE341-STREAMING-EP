require('dotenv').config();
const mongoose = require("mongoose");

module.exports = 
    mongoose.connect(process.env.MONGODB_URI)
        .then((() => console.log("Connected to Mongo Atlas DB")))
        .catch((err) => console.error(err));