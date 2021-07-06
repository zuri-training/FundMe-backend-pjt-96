module.exports = class BeneficiaryService {
  static async getAllBeneficiaries() {
    return await School.find({});
  }
};
