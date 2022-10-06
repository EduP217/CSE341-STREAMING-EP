const router = require('express').Router();
const { ensureAuth } = require('../middleware/auth')

const streamersController = require('../controllers/streaming');

router.get("/", ensureAuth, streamersController.all);
router.get("/:id", ensureAuth, streamersController.findById);
router.post("/", ensureAuth, streamersController.create);
router.put("/:id", ensureAuth, streamersController.update);
router.delete("/:id", ensureAuth, streamersController.destroy);

module.exports = router;