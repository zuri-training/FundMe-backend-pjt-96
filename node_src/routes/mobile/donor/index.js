const passport = require("passport");
const secureRoute = require("./secured-routes");
const donorRoutes = require("./donor");
require("../donor/auth");

const router = require("express").Router();

router.use("/donor", donorRoutes);
// Plug in the JWT strategy as a middleware so only verified users can access this route.
router.use(
  "/donor",
  passport.authenticate("jwt", { session: false }),
  secureRoute
);
module.exports = router;
