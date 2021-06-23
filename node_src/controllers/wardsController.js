const wardService = require("../services/wardService");

module.exports = class wardsController {
  static async createWardProfile(request, response) {
    try {
      let ward = await wardService.createWardProfile(request.body);

      response
        .status(200)
        .json({ code: "SUCCESS", success: ward, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error:
          error.message || " You cannot create a ward profile at the moment",
      });
    }
  }

  static async getWards(request, response) {
    try {
      let wards = await wardService.getWards();

      response
        .status(200)
        .json({ code: "SUCCESS", success: wards, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error:
          error.message ||
          " You cannot get all the list of wards at the moment",
      });
    }
  }

  static async getWardById(request, response) {
    try {
      let ward = await wardService.getWardById(request.params.id);

      response
        .status(200)
        .json({ code: "SUCCESS", success: ward, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error: error.message || "You cannot access this ward at the moment",
      });
    }
  }

  static async deleteWardById(request, response) {
    try {
      let ward = await WardService.deleteWardById(request.params.id);

      response
        .status(200)
        .json({ code: "SUCCESS", success: ward, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error: error.message || "You cannot access this ward at the moment",
      });
    }
  }

  static async updateWardByid(request, response) {
    try {
      let ward = await wardService.updateWardById(
        request.params.id,
        request.body
      );
      response
        .status(200)
        .json({ code: "SUCCESS", success: ward, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error: error.message || "You cannot access this ward at the moment",
      });
    }
  }
};
