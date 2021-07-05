const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();
const UndergraduateController = require("../../controllers/UndergraduateController");

router.post("/signup", UndergraduateController.createStudentProfile);

router.post("/login", async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      if (err || !user) {
        return res
          .status(400)
          .json({ code: "FAILED", success: null, error: info.message });
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);
        console.log(error);

        const body = { _id: user._id, email: user.email };
        // const body = user;
        const token = jwt.sign({ user: body }, "TOP_SECRET");

        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

router.get("/logout", function (req, res) {
  req.logout();
  res.send("Logged out");
});
module.exports = router;
