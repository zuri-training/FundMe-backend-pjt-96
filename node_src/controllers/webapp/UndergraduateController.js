const UndergraduateService = require("../services/UndergraduateService");

module.exports = class UndergraduateController {
  static async createStudentProfile(request, response) {
    try {
      let student = await UndergraduateService.createStudentProfile(
        request.body
      );
      response
        .status(201)
        .json({ code: "SUCCESS", success: student, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error:
          error.message ||
          " You cannot create a Student's profile at the moment",
      });
    }
  }

  static async getAllStudents(request, response) {
    try {
      let student = await UndergraduateService.getAllStudents();

      response
        .status(200)
        .json({ code: "SUCCESS", success: student, error: null });
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

  static async getStudentById(request, response) {
    try {
      let student = await UndergraduateService.getStudentById(
        request.params.id
      );

      response
        .status(200)
        .json({ code: "SUCCESS", success: student, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error:
          error.message ||
          "You cannot access this Student's account at the moment",
      });
    }
  }

  static async deleteStudentById(request, response) {
    try {
      let student = await UndergraduateService.deleteStudentById(
        request.params.id
      );

      response
        .status(200)
        .json({ code: "SUCCESS", success: student, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error:
          error.message ||
          "You cannot delete this student's account at the moment",
      });
    }
  }

  static async updateStudentByid(request, response) {
    try {
      let student = await UndergraduateService.updateStudentById(
        request.params.id,
        request.body
      );
      response
        .status(200)
        .json({ code: "SUCCESS", success: student, error: null });
    } catch (error) {
      response.status(500).json({
        code: "FAILED",
        success: null,
        error:
          error.message ||
          "You cannot access this Student's account at the moment",
      });
    }
  }
};
