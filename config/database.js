require("dotenv").config();
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const conn = () => {
  return mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  conn,
};
