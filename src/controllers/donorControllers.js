const donor = require('../models/donor') //importing donor model
const bcrypt = require('bcrypt');

//creating a function to register donors
exports.registerNewDonor = (req, res) => {
    donor.findOne({ email: req.body.email }, (err, existingUser) => {
        if (err) {
            return res.status(500).json({err})
        }

        if(existingUser){
            res.status(400).json({message: 'A user with email already exists'})
        }
    })

    donor.create({ //creating the donor document
        ...req.body
    }, (err, newUser) => {
        if (err) {
            res.status(406).json({ message: err})
        }
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                res.status(400).json({err})
            }
            
            bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
                if (err) {
                    res.status(400).json({err})
                }

                newUser.password = hashedPassword;
                newUser.save((err, savedUser) => {
                    if (err) {
                        res.status(400).json({err})
                    } else {
                        res.status(200).json({message: 'Donor succesfuly created', data: savedUser})
                    }
                })
            })
        })
    })
}