const express  = require('express');
const multer  = require('multer');
const uploadCobnfig = require('./config/upload');

const controllerSecao  = require('./controllers/ControllerSecao');
const controllerSpots  = require('./controllers/ControllerSpots');
const controllerPainelUsuario  = require('./controllers/ControllerPainelUsuario');


const rotas = express.Router();
const upload = multer(uploadCobnfig);


rotas.post('/secao', controllerSecao.criaSecao);

rotas.get('/spot', controllerSpots.index);
rotas.post('/spot', upload.single('fote_tema'), controllerSpots.criaSpot);
// rotas.post('/spot', controllerSpots.criaSpot);


rotas.get('/painel_usuario', controllerPainelUsuario.monta_painel);

    //req -> captura dos parametros q são passados para essa api
    //res -> resposta q a api vai dar

    //para pegar valores q a api vaii retornar deve-se obter pela variavel req
    // o req.query.idade vai pegar o valor q sao retornados pela url ex url/?idade=21
   // return res.json({id:req.params.id}); -> para fazer updates o id do ususario na url
module.exports = rotas;