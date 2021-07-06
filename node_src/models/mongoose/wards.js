const mongoose = require('mongoose');

// create Ward schema
const WardSchema = mongoose.Schema(
    {
        //Define the properties of application user (wards)
        // application user (wards)
        firstName: {
            type: String,
            required: true
        },

        lastName: {
            type: String,
            required: true,
        },

        Class: {
            type: String,
            required: true,
        },

        dateOfBirth: {
            type: Date,
            required: true,
        },

        gender: {
            type: String,
            required: true,
        },

        
    },
    {
        timestamps: true
    }
);


module.exports = mongoose.model("Ward", WardSchema);