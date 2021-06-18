const mongoose = require("mongoose"),
  { Schema } = mongoose,
  bcrypt = require("bcrypt"),
  schoolSchema = Schema(
    {
      name: {
        type: String,
        trim: true,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true,
      },
      dateFounded: {
        type: Date,
        required: true,
      },
      address: {
        type: String,
        trim: true,
        required: true,
      },
      phoneNumber: {
        type: Number,
        required: true,
      },
      governmentApproved: {
        type: Boolean,
        default: false,
      },
      wards: [{ type: Schema.Types.ObjectId, ref: "Ward" }],
    },
    {
      timestamps: true,
    }
  );

schoolSchema.pre("save", function (next) {
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

schoolSchema.methods.passwordComparison = function (inputPassword) {
  let user = this;
  return bcrypt.compare(inputPassword, user.password);
};

module.exports = mongoose.model("School", schoolSchema);
