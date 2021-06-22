const ngoService = require('../services/ngoService');

module.exports = class ngoController {
    static async createNgoAccount(req, res){
        try {
            let ngo = await ngoService.createNgoAccount(req.body);

            res.status(201).json({status: 'Successful', data: ngo})
        } catch (error) {
            res.status(500).json({status: 'Failed', error: error})
        }
    }

    static async getAllNgos(req, res){
        try {
            let ngos = await ngoService.getAllNgos();

            res.status(201).json({status: 'Successful', data: ngos})
        } catch (error) {
            res.status(500).json({status: 'Failed', error: error})
        }
    }

    static async getNgoByID(req, res){
        try {
            let ngo = await ngoService.getNgoById(req.params.id);

            res.status(201).json({status: 'Successful', data: ngo})
        } catch (error) {
            res.status(500).json({status: 'Failed', error: error})
        }
    }

    static async deleteNgoById(req, res){
        try {
            let ngo = await ngoService.deleteNgoByID(req.params.id);

            res.status(201).json({status: 'Successful', data: ngos})
        } catch (error) {
            res.status(500).json({status: 'Failed', error: error})
        }
    }

    static async updateNgoById(req, res){
        try {
            let ngo = await ngoService.updateNgoById(req.params.id, req.body);

            res.status(201).json({status: 'Successful', data: ngos})
        } catch (error) {
            res.status(500).json({status: 'Failed', error: error})
        }
    }
}