const Beneficiary = require('../../models/mongoose/beneficiaries');

module.exports = class BeneficiaryService {

  static getUserParams(body) {
    return {
      name: {
        firstName: body.firstName,
        lastName: body.lastName,
      },
      password: body.password,
      country: body.country,
      state: body.state,
      city: body.city,
      address: body.address,
      postalcode: body.postalcode,
      email: body.email,
      phoneNumber: body.phoneNumber,
    };
  }

  static async createBeneficiaryProfile(details) {
    let beneficiary = BeneficiaryService.getUserParams(details);
    try {
      let beneficiaryCreated = await Beneficiary.create(beneficiary);
      return beneficiaryCreated;
    } catch (error) {
      return error;
    }
  }

  static async getAllBeneficiaries() {
    return await Beneficiary.find({});
  }

  static async getBeneficiaryById(id) {
    return await Beneficiary.findById(id).exec();
  }

  static async deleteBeneficiaryById(id) {
    Beneficiary.findByIdAndDelete(id)
      .then((beneficiary) => {
        return beneficiary;
      })
      .catch((error) => {
        return error;
      });
  }

  static async updateBeneficiaryById(id, details) {
    userParams = BeneficiaryService.getUserParams(details);
    Beneficiary.findByIdAndUpdate(id, {
      $set: userParams,
    })
      .then((beneficiary) => {
        // need to set in the mongoose middleware "mongoose.set('returnOriginal', false);"
        return beneficiary;
      })
      .catch((error) => {
        return error;
      });
  }

};
