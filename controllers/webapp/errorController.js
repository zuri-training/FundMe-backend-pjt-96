exports.respondInternalError = (error, req, res, next) => {
  if (error.name === "MongoError") {
    if (error.code === 11000) {
      res.status(400).json({
        status: "Failed",
        message: `${Object.keys(error.keyValue)} is already used`,
      });
    }
  }
};
