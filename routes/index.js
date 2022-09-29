const router = require('express').Router();

router.use("/", require('./swagger'));
router.use("/streaming", require('./streamers'));

module.exports = router;