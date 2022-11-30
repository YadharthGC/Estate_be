const { ensureFunction } = require("./ensureController");
const router = require("express").Router();
router.post("/", ensureFunction);
module.exports = router;
