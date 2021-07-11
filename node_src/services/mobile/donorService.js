require("express-async-errors");
const Donor = require("../../models/mongoose/donor");

module.exports = class DonorService {
  static getUserParams(body) {
    return {
      firstName: body.firstName,
      lastName: body.lastName,
      password: body.password,
      email: body.email,
      phoneNumber: body.phoneNumber,
    };
  }

  static async createDonorProfile(details) {
    let donor = DonorService.getUserParams(details);
    let donorCreated = await Donor.create(donor);
    donorCreated.password = null;
    return donorCreated;
  }

  static async getAllDonors() {
    return await Donor.find({});
  }

  static async getDonorById(id) {
    return await Donor.findById(id).exec();
  }

  static async deleteDonorById(id) {
    Donor.findByIdAndDelete(id)
      .then((donor) => {
        return donor;
      })
      .catch((error) => {
        return error;
      });
  }

  static async updateDonorById(id, details) {
    userParams = DonorService.getUserParams(details);
    Donor.findByIdAndUpdate(id, {
      $set: userParams,
    })
      .then((donor) => {
        // need to set in the mongoose middleware "mongoose.set('returnOriginal', false);"
        return donor;
      })
      .catch((error) => {
        return error;
      });
  }
};
