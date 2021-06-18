const School = require("../models/schools");

module.exports = class SchoolService {
  static getUserParams(body) {
    return {
      name: body.name,
      password: body.password,
      email: body.email,
      dateFounded: body.dateFounded,
      address: body.address,
      phoneNumber: body.phoneNumber,
      governmentApproved: body.governmentApproved,
    };
  }

  static async createSchoolProfile(details) {
    let schoolParams = SchoolService.getUserParams(details);
    School.create(schoolParams)
      .then((school) => {
        return school;
      })
      .catch((error) => {
        return error;
      });
  }

  static async getAllSchools() {
    return await School.find({});
  }

  static async getSchoolById(id) {
    return await School.findById(id).exec();
  }

  static async deleteSchoolById(id) {
    School.findByIdAndDelete(id)
      .then((school) => {
        return school;
      })
      .catch((error) => {
        return error;
      });
  }

  static async updateSchoolById(id, details) {
    userParams = SchoolService.getUserParams(details);
    School.findByIdAndUpdate(id, {
      $set: userParams,
    })
      .then((school) => {
        // need to set in the mongoose middleware "mongoose.set('returnOriginal', false);"
        return school;
      })
      .catch((error) => {
        return error;
      });
  }
};
