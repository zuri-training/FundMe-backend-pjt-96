const router = require("express").Router();
const undergraduate = require("./undergraduates");

router.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

router.use("/", undergraduate);

module.exports = router;
