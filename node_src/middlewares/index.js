const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
module.exports = (app) => {
  app.use(helmet());
  app.set("trust proxy", 1);
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  });

  //  apply to all requests
  app.use(limiter);
};
