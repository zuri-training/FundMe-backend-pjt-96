const passport = require("passport");
const secureRoute = require("./secured-routes");
const donorRoutes = require("./donor");
const isTokenBlacklisted = require("../../../middlewares/isTokenBlackListed");
const verifyToken = require("../../../middlewares/verifyToken");
require("../donor/auth");

const router = require("express").Router();

router.use("/donor", donorRoutes);
// Plug in the JWT strategy as a middleware so only verified users can access this route.
// router.use(
//   "/donor",
//   passport.authenticate("jwt", { session: false }),
//   secureRoute
// );
// Plug in custom middlewares that have being created to verify users.
router.use("/donor", verifyToken, isTokenBlacklisted, secureRoute);
module.exports = router;
