require("dotenv").config();
const jwt = require("jsonwebtoken");
const verifyToken = (request, response, next) => {
  // Take the token from the query parameter
  const token = request.query.secret_token;
  // Verify the token
  jwt.verify(token, process.env.secret_key, (error, decoded) => {
    if (error) {
      return response.status(401).send({
        status: "error",
        message: error.message,
      });
    }

    // Append the parameters to the request object
    request.userId = decoded.user._id;
    request.tokenExp = decoded.exp;
    request.token = token;
    next();
  });
};

module.exports = verifyToken;
