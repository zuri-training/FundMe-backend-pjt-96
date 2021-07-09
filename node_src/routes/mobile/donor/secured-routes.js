const router = express.Router();

router.get("/profile", (req, res, next) => {
  // req.user.password = "";
  res.json({
    message: "You made it to the secure route",
    user: req.user,
    token: req.query.secret_token,
  });
  next();
});

module.exports = router;
