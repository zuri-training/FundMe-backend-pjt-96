const express = require("express");
require("dotenv").config();
const { PORT } = process.env; //get sensitive info from .env file
const dbSetup = require("./database/setup");
const routes = require("./routes");

const app = express();

//initialise database connection
dbSetup(app);
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

// export app instance to be used in the routes file
routes(app);
