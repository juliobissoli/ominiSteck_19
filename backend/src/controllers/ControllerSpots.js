const User = require('../models/Users');

const Spot = require('../models/Spots');



module.exports = {

    async index(req, res){
        const {tecnologia} = req.body;
        console.log(tecnologia);
       // const spots = await Spot.find({tecnologias: tecnologia});
        return res.jsom({tecnologia:tecnologia});
    },

    async criaSpot(req, res){
        // return res.json({"test":"pk"});
        const {filename} = req.file;
        const {enpresa ,  tecnologias, valor} = req.body;
        const {user_id} = req.headers;
        
        let usuario = await User.findById(user_id);
        if(!usuario){
            console.log("a saida do req->>", req);
            return res.status(400).jsom({error : "Deu ruim em echar esse ususario"});
        }
        
        const spot = await Spot.create({
            usuario: user_id,
            fote_tema: filename,
            enpresa,
            tecnologias: tecnologias.split(',').map(tecnologias=> tecnologias.trim()),
            valor,

        });
        // const {email} = req.body;
        // console.log(req.body);
        // console.log(req.file);
        
        return res.json(spot);
    }
}