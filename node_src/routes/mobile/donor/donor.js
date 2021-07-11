const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();
const DonorController = require("../../../controllers/mobile/DonorController");
const verifyToken = require("../../../middlewares/verifyToken");
const redisClient = require("../../../index");
// const RedisDB = require("../../../database/redis");
// const redisClient = RedisDB.client;
require("dotenv").config();

router.post("/signup", DonorController.createDonorProfile);

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
        const body = { _id: user._id, email: user.email };
        // const body = user;
        const token = jwt.sign({ user: body }, process.env.secret_key);

        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

router.post("/logout", verifyToken, function (request, response) {
  // 3. take out the userId and token from the request
  const { userId, token } = request;

  // 4. use the get method provided by redis to check with the userId to see if the user exists in the blacklist
  redisClient.get(userId, (error, data) => {
    if (error) {
      response.send({ error });
    }

    // 5. if the user is on the blacklist, add the new token
    // from the request object to the list of
    // token under this user that has been invalidated.

    /*
The blacklist is saved in the format => "userId": [token1, token2,...]

redis doesn't accept objects, so you'd have to stringify it before adding 
*/
    if (data !== null) {
      const parsedData = JSON.parse(data);
      parsedData[userId].push(token);
      redisClient.setex(userId, 3600, JSON.stringify(parsedData));
      return response.send({
        status: "success",
        message: "Logout successful",
      });
    }

    // 6. if the user isn't on the blacklist yet, add the user the token
    // and on subsequent requests to the logout route the user
    // will be found and the token will be appended to the already existing list.
    const blacklistData = {
      [userId]: [token],
    };
    redisClient.setex(userId, 3600, JSON.stringify(blacklistData));
    return response.send({
      status: "success",
      message: "Logout successful",
    });
  });
});
module.exports = router;
