const Undergraduate = require("../models/undergraduate");

module.exports = class UndergraduateService {
  static getUserParams(body) {
    return {
      name: {
        firstName: body.firstName,
        lastName: body.lastName,
        university: body.university,
      },
      matricNo: body.matricNo,
      password: body.password,
      email: body.email,
      faculty: body.faculty,
      department: body.department,
      level: body.level,
      phoneNumber: body.phoneNumber,
    };
  }

  static async createStudentProfile(details) {
    let student = UndergraduateService.getUserParams(details);
    try {
      let studentCreated = await Undergraduate.create(student);
      return studentCreated;
    } catch (error) {
      return error;
    }
  }

  static async getAllUndergraduates() {
    return await Undergraduate.find({});
  }

  static async getUndergraduateById(id) {
    return await Undergraduate.findById(id).exec();
  }

  static async deleteUndergraduateById(id) {
    Undergraduate.findByIdAndDelete(id)
      .then((student) => {
        return student;
      })
      .catch((error) => {
        return error;
      });
  }

  static async updateUndergraduateById(id, details) {
    userParams = UndergraduateService.getUserParams(details);
    Undergraduate.findByIdAndUpdate(id, {
      $set: userParams,
    })
      .then((student) => {
        // need to set in the mongoose middleware "mongoose.set('returnOriginal', false);"
        return student;
      })
      .catch((error) => {
        return error;
      });
  }
};
