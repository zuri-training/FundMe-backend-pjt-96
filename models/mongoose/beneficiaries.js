const mongoose = require("mongoose"),
  { Schema } = mongoose,
  beneficiariesSchema = new Schema(
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
        }
      },
      password: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        trim: true,
        required: true,
      },
      state: {
        type: String,
        trim: true,
        required: true,
      },
      city: {
        type: String,
        trim: true,
        required: true,
      },
      address: {
        type: String,
        trim: true,
        required: true,
      },
      postalcode: {
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
      cacDocument: {
        type: Buffer,
        required: true
      },
      govVerification: {
        type: Buffer,
        required: true
      }
    },
    {
      timestamps: true,
    }
  );
module.exports = mongoose.model("Beneficiary", beneficiariesSchema);
