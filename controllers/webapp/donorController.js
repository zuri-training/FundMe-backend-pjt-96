const donorService = require("../../services/webapp/donorService");

module.exports = class donorController {
  static async createDonorAccount(req, res) {
    try {
      let donor = await donorService.createDonorAccount(req.body);

      res.status(201).json({ status: "Successful", data: donor });
    } catch (error) {
      res.status(500).json({ status: "Failed", error: error });
    }
  }

  static async getAllDonors(req, res) {
    try {
      let donors = await donorService.getAllDonors();

      res.status(201).json({ status: "Successful", data: donors });
    } catch (error) {
      res.status(500).json({ status: "Failed", error: error });
    }
  }

  static async getDonorByID(req, res) {
    try {
      let donor = await donorService.getDonorById(req.params.id);

      res.status(201).json({ status: "Successful", data: donors });
    } catch (error) {
      res.status(500).json({ status: "Failed", error: error });
    }
  }

  static async deleteDonorById(req, res) {
    try {
      let donor = await donorService.deleteDonorByID(req.params.id);

      res.status(201).json({ status: "Successful", data: donors });
    } catch (error) {
      res.status(500).json({ status: "Failed", error: error });
    }
  }

  static async updateDonorById(req, res) {
    try {
      let donor = await donorService.updateDonorById(req.params.id, req.body);

      res.status(201).json({ status: "Successful", data: donor });
    } catch (error) {
      res.status(500).json({ status: "Failed", error: error });
    }
  }
};
