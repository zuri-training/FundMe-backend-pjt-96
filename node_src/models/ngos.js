const mongoose = require('mongoose');

//Creating an NGO Schema
const ngoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'email already in database']
    },
    password: {
        type: String,
        required: true
    },
    phone: Number,
    dateFounded: Date,
    state: {
        type: String,
        required: true
    },
    wards: [{
        type: Schema.Types.ObjectId, ref: 'Ward'
    }]
},
{
    timestamps: true
})

//Creating an NGO Model with the above schema
const ngo = mongoose.model('Ngo', ngoSchema);

//Exporting the NGO model
module.exports = ngo;