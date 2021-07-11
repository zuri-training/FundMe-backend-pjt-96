const express = require("express");
require("dotenv").config();
const { PORT } = process.env; //get sensitive info from .env file
const MongoDBSetup = require("./database/mongoose");
const RedisDBSetup = require("./database/redis");
const routes = require("./routes");
const middlewares = require("./middlewares");

const app = express();

//initialise RedisDB database connection
const RedisDB = new RedisDBSetup();
const redisClient = RedisDB.connect();
//initialise MongoDB database connection
MongoDBSetup(app);
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

// middlewares for app
middlewares(app);

// export app instance to be used in the routes file
routes(app);
module.exports = redisClient;
