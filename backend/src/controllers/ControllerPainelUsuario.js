const Spot = require('../models/Spots');


module.exports = {
    async monta_painel(req, res){
         const { usuarior_id }  = req.headers;

        const spot =  await Spot.find({usuario: usuarior_id});
        return res.jsom(spot);
    }
}