const express = require('express');
require('dotenv').config();
const { PORT } = process.env; //get sensitive info from .env file
const dbSetup = require('./database/setup');

//require routes
const authRoutes = require('./routes/authRoutes')

const app = express();

//initialise database connection
dbSetup();

app.use(express.json());

//adding the created route object to the express path
app.use('/auth', authRoutes);

app.listen(PORT || 4000, ()=> { console.log('Server is running') });