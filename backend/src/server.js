const  express = require('express');
const  mongoose = require('mongoose');
const  cors = require('cors');


const rotas = require('./rotas');


const app = express();

mongoose.connect('mongodb+srv://teste:teste@aularoketsit-9k87j.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})


app.use(cors());
app.use(express.json()); //para abilitar o formato jsom p pode ser lido como body no .req.boby
app.use(rotas);


app.listen(3333);