const fundme = require("./fundme");

module.exports = (app) => {
  app.use("/api/v1/fundme", fundme);
  // app.use("/api/v2/fund") for a newer version of api;
};
