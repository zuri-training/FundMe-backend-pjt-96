const express = require('express');
const router = express.Router();

//importing the controller
const controller = require('../controllers/donorControllers');

//adds the post function to the router object
router.post('/signup/donor', controller.registerNewDonor)

//exporting the router object
module.exports = router;