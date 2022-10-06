const router = require("express").Router();

router.use("/", require("./swagger"));
router.use("/auth", require("./auth"));
router.use("/streaming", require("./streaming"));
router.use("/account", require("./account"));

module.exports = router;
