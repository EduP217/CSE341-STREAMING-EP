const router = require('express').Router();

const streamersController = require('../controllers/streaming');

router.get("/", streamersController.all);
router.get("/:id", streamersController.findById);
router.post("/", streamersController.create);
router.put("/:id", streamersController.update);
router.delete("/:id", streamersController.destroy);

module.exports = router;