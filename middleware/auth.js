const createError = require('http-errors');

module.exports = {
  ensureAuth: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    return next(createError(500, "Authorization Invalid"));
  }
};
