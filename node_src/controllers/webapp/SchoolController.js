const SchoolService = require("../services/SchoolService");

module.exports = class SchoolController {
  static async createSchoolProfile(request, response) {
    try {
      let school = await SchoolService.createSchoolProfile(request.body);

      response
        .status(201)
        .json({ code: "SUCCESS", success: school, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error:
          error.message || " You cannot create a School profile at the moment",
      });
    }
  }

  static async getAllSchools(request, response) {
    try {
      let schools = await SchoolService.getAllSchools();

      response
        .status(200)
        .json({ code: "SUCCESS", success: schools, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error:
          error.message ||
          " You cannot get all the list of Schools at the moment",
      });
    }
  }

  static async getSchoolById(request, response) {
    try {
      let school = await SchoolService.getSchoolById(request.params.id);

      response
        .status(200)
        .json({ code: "SUCCESS", success: school, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error: error.message || "You cannot access this School at the moment",
      });
    }
  }

  static async deleteSchoolById(request, response) {
    try {
      let school = await SchoolService.deleteSchoolById(request.params.id);

      response
        .status(200)
        .json({ code: "SUCCESS", success: school, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error: error.message || "You cannot access this School at the moment",
      });
    }
  }

  static async updateSchoolByid(request, response) {
    try {
      let school = await SchoolService.updateSchoolById(
        request.params.id,
        request.body
      );
      response
        .status(200)
        .json({ code: "SUCCESS", success: school, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error: error.message || "You cannot access this School at the moment",
      });
    }
  }
};
