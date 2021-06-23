const router = require("express").Router();
const undergraduate = require("../routes/undergraduates");

router.use("/", undergraduate);

module.exports = router;
