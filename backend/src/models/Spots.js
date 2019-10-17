const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    fote_tema:String,
    enpresa: String,
    valor: Number,
    tecnologias: [String],
    usuario:{
        type: mongoose.Schema.Types.ObjectId, //Id do usuario dessa informação
        ref:'Users',
    }
}) 

module.exports = mongoose.model('Spot', SpotSchema);