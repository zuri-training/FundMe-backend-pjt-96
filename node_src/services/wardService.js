const Ward = require("../models/wards");

module.exports = class wardService{
    static getUserParams(body){
      return {
        firstName: body.firstName,
        lastName: body.lastName,
        class: body.class,
        dateOfBirth: body.dateOfBirth,
        gender: body.gender
      };
    }

    static async createWardProfile(details){
      let wardParams = wardService.getUserParams(details);
      Ward.create(wardParams)
        .then((ward) => {
          return ward;
        })    
        .catch((error) => {
          return error;
        });
    }

    static async getWards() {
      return await Ward.find({});
    }
  
    static async getWardById(id) {
      return await Ward.findById(id).exec();
    }

    static async deleteWardById(id) {
      Ward.findByIdAndDelete(id)
        .then((ward) => {
          return ward;
        })
        .catch((error) => {
          return error;
        });
    }
  
    static async updateWardById(id, details) {
      userParams = wardService.getUserParams(details);
      Ward.findByIdAndUpdate(id, {
        $set: userParams,
      })
        .then((ward) => {
          // need to set in the mongoose middleware "mongoose.set('returnOriginal', false);"
          return ward;
        })
        .catch((error) => {
          return error;
        });
    };
  
};