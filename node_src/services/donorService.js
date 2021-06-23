const donor  = require('../models/donor');

module.exports = class donorService {
    static getUserParams(body){
        return{

        };
    }

    static async createDonorAccount(details){
        let donorDetails = donorService.getUserParams(details);
        donor.create(donorDetails)
            .then((donor) => {
                return donor
            })
            .catch((error) => {
                return error;
            })
    }

    static async getAllDonors() {
        return await donor.find({});
    }

    static async getDonorById(id){
        return await donor.findById(id).exec();
    }

    static async deleteDonorByID(id){
        donor.findByIdAndDelete(id)
            .then((donor) => {
                return donor;
            })
            .catach((error) =>{
                return error;
            });
    }

    static async updateDonorById(id, details){
        userParams = donorService.getUserParams(details);
        donor.findByIdAndUpdate(id, {
            $set: userParams
        })
            .then((donor) => {
                return donor;
            })
            .catch((error) => {
                return error;
            })
    }
};