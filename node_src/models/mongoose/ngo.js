const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


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

ngoSchema.pre("save", function (next) {
    let user = this;
    bcrypt
      .hash(user.password, 10)
      .then((hash) => {
        user.password = hash;
        next();
      })
      .catch((error) => {
        console.log(`Error in hashing password: ${error.message}`);
        next(error);
      });
  });
  
  ngoSchema.methods.passwordComparison = function (inputPassword) {
    let user = this;
    return bcrypt.compare(inputPassword, user.password);
  };
  
//Creating an NGO Model with the above schema
const ngo = mongoose.model('Ngo', ngoSchema);

//Exporting the NGO model
module.exports = ngo;