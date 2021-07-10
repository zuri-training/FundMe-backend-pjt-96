const BeneficiaryService = require("../../services/webapp/BeneficiaryService");
module.exports = class BeneficiaryController {
  static async createBeneficiaryAccount(req, res) {
    
      let beneficiary = await BeneficiaryService.createBeneficiaryProfile(
        req.body
      );

      res.status(201).json({ status: "Successful", data: beneficiary });
    
  }

  static async getAllBeneficiaries(req, res) {
    try {
      let beneficiaries = await BeneficiaryService.getAllBeneficiaries();

      res.status(201).json({ status: "Successful", data: beneficiaries });
    } catch (error) {
      res.status(500).json({ status: "Failed", error: error });
    }
  }

  static async getBeneficiaryByID(req, res) {
    try {
      let beneficiaries = await BeneficiaryService.getBeneficiaryById(
        req.params.id
      );

      res.status(201).json({ status: "Successful", data: beneficiaries });
    } catch (error) {
      res.status(500).json({ status: "Failed", error: error });
    }
  }

  static async deleteBeneficiaryById(req, res) {
    try {
      let beneficiary = await BeneficiaryService.deleteBeneficiaryByID(
        req.params.id
      );

      res.status(201).json({ status: "Successful", data: beneficiary });
    } catch (error) {
      res.status(500).json({ status: "Failed", error: error });
    }
  }

  static async updateBeneficiaryById(req, res) {
    try {
      let beneficiary = await BeneficiaryService.updateBeneficiaryById(
        req.params.id,
        req.body
      );

      res.status(201).json({ status: "Successful", data: beneficiary });
    } catch (error) {
      res.status(500).json({ status: "Failed", error: error });
    }
  }
};
