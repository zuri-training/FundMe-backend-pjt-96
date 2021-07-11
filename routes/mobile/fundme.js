const router = require("express").Router();
// const beneficiary = require("./beneficiary");
const donor = require("./donor");

router.get("/", (req, res) => {
  res.send("Welcome to the home page");
});

//router.use("/", beneficiary);
router.use("/", donor);

module.exports = router;
