//Carregando Módulos
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/db');
const bodyParser = require('body-parser');

//Carregando Controllers
const user = require('./controllers/user');
const ativo = require('./controllers/ativo');
const registro = require('./controllers/registro');


//Configurações

    //Body Parser

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    //Mongoose
    mongoose.Promise = global.Promise;
    mongoose.connect(db.mongoURI, { useNewUrlParser: true }).then(()=>{console.log('db:success')}).catch((err)=>{console.log("db:failed: "+err)});

    //middlewares
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

// Rotas
app.get('/uploads/:id', (req, res)=>{
    res.sendFile(__dirname+'/uploads/'+req.params.id);
});

app.use('/user', user);
app.use('/ativo', ativo);
app.use('/registro', registro);



// Inicialização do servidor
const PORT =  process.env.PORT || 8081;
app.listen(PORT, ()=>{
    console.log('serv:success');
});