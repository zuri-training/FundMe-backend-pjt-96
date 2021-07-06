const BeneficiaryService = require("../../services/webapp/BeneficiaryService");
module.exports = class BeneficiaryController {
  static async getAllBeneficiaries(request, response) {
    try {
      let beneficiaries = await BeneficiaryService.getAllBeneficiaries();
      response
        .status(200)
        .json({ code: "SUCCESS", success: beneficiaries, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error:
          error.message ||
          " You cannot get all the list of Students at the moment",
      });
    }
  }
};
