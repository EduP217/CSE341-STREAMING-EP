const router = require('express').Router();

router.use("/", require('./swagger'));
router.use("/streaming", require('./streaming'));

module.exports = router;