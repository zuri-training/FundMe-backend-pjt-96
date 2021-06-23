const mongoose = require("mongoose");
require("dotenv").config();

const { connectionUri, connectionUrl } = process.env;
mongoose.Promise = global.Promise;
module.exports = () => {
  mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
  mongoose.set("returnOriginal", false);
  const db = mongoose.connection;
  db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
  });
  db.on("error", (error) => console.log(error));
};
