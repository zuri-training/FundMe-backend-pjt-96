exports.respondInternalError = (error, req, res, next) => {
  if (error.name === "MongoError") {
    if (error.code === 11000) {
      res.status(400).json({
        status: "Failed",
        message: `${error.keyValue[0]} is already used`,
      });
    } else {
      res.status(500).json({
        status: "Failed",
        message: "Cannot access the server at the moment",
      });
    }
  }
};
