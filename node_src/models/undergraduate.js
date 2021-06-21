const mongoose = require("mongoose"),
  { Schema } = mongoose,
  bcrypt = require("bcrypt"),
  undergraduateSchema = new Schema(
    {
      name: {
        firstName: {
          type: String,
          trim: true,
          required: true,
        },
        lastName: {
          type: String,
          trim: true,
          required: true,
        },
        university: {
          type: String,
          trim: true,
          required: true,
        },
      },
      password: {
        type: String,
        required: true,
      },
      matricNo: {
        type: String,
        trim: true,
        required: true,
      },
      faculty: {
        type: String,
        trim: true,
        required: true,
      },
      department: {
        type: String,
        trim: true,
        required: true,
      },
      email: {
        type: String,
        trim: true,
        required: true,
        lowercase: true,
        unique: true,
      },
      phoneNumber: {
        type: Number,
        required: true,
      },
      level: {
        type: Number,
        required: true,
        min: [100, "Level not valid"],
        max: [900],
      },
    },
    {
      timestamps: true,
    }
  );

undergraduateSchema.virtual("fullName").get(function () {
  return `${this.name.firstName} ${this.name.lastName}`;
});

undergraduateSchema.pre("save", function (next) {
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

undergraduateSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);

  return compare;
};

module.exports = mongoose.model("Undergraduate", undergraduateSchema);
