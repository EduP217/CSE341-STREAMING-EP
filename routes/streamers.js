const router = require('express').Router();

const streamersController = require('../controllers/streamers');

router.get("/", streamersController.all);
router.get("/:id", streamersController.findById);

module.exports = router;