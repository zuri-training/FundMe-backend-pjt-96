const donorController = require("../../../controllers/mobile/donorController");
const express = require("express");
const router = express.Router();

// router.get("/profile", (req, res, next) => {
//   // req.user.password = "";
//   res.json({
//     message: "You made it to the secure route",
//     user: req.user,
//     token: req.query.secret_token,
//   });
//   next();
// });

router.get("/profile", (req, res) => {
  let user = donorController.getDonorById(req.userId);
  res.status(200).json({
    message: "Success",
    user: user,
    token: req.token,
  });
});

module.exports = router;
