const router = require("express").Router();
const { ensureAuth } = require('../middleware/auth');

const accountController = require("../controllers/account");

router.get('/profile', ensureAuth, accountController.getProfile);

module.exports = router;