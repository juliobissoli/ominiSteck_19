const Users = require('../models/Users');



module.exports = {
    async criaSecao(req, res){
        const {email} = req.body;

        let usuario =  await Users.findOne({email : email}); // Faz uma busca no compo email da do banco com a variavel emmail

        if(!usuario){
            usuario =  await Users.create({email});
        }

        return res.json(usuario);
    }
}