const mongoose = require("mongoose");
require("dotenv").config();
const { PORT } = process.env;

const { connectionUri, connectionUrl } = process.env;
mongoose.Promise = global.Promise;
module.exports = (app) => {
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
    app.listen(PORT || 4000, () => {
      console.log("Server is running");
    });
  });
  db.on("error", (error) =>
    console.log(`OOPS cannot connect to the database at the moment ${error}`)
  );
};
