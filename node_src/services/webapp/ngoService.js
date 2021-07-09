const ngo = require('../models/ngo');

module.exports = class ngoService {
    static getUserParams(body){
        return{

        };
    }

    static async createNgoAccount(details){
        let ngoDetails = ngoService.getUserParams(details);
        ngo.create(ngoDetails)
            .then((ngo) => {
                return ngo
            })
            .catch((error) => {
                return error;
            })
    }

    static async getAllNgos() {
        return await ngo.find({});
    }

    static async getNgoById(id){
        return await ngo.findById(id).exec();
    }

    static async deleteNgoByID(id){
        ngo.findByIdAndDelete(id)
            .then((ngo) => {
                return ngo;
            })
            .catach((error) =>{
                return error;
            });
    }

    static async updateNgoById(id, details){
        userParams = ngoService.getUserParams(details);
        ngo.findByIdAndUpdate(id, {
            $set: userParams
        })
            .then((ngo) => {
                return ngo;
            })
            .catch((error) => {
                return error;
            })
    }
};