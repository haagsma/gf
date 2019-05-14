const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/user');
const User = mongoose.model('users');
require('../models/registro');
const Registro = mongoose.model('registros');
require('../models/ativo');
const Ativo = mongoose.model('ativos');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const fs = require('fs');
const moment = require('moment');
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './uploads/');

    },
    filename: (req, file, cb)=>{
        try {
            fs.unlink(__dirname+'/uploads/'+file.originalname, (err)=>{
                console.log('deu erro no upload callback')
            });
        }catch(e)
        {
            console.log('erro ao excluir: '+e)
        }
        cb(null, file.originalname)
    }
});
const upload = multer({storage: storage});

router.post('/add', (req, res)=>{
    User.findOne({email: req.body.email}).then((user)=>{
        if(user){
            res.send({resposta: 'Usuario já existe, tente novamente!', tipo: 0})
        }else{
            let usertemp = req.body;
            bcrypt.genSalt(10, (erro, salt)=>{
                bcrypt.hash(usertemp.senha, salt, (erro, hash)=>{
                    if(erro){
                        res.send({resposta: 'Erro ao encriptar sua senha, tente novamente!', tipo: 0})
                    }else{
                        usertemp.senha = hash;
                        new User(usertemp).save().then((saveduser)=>{
                            new Ativo({
                                nome: "Pessoal",
                                descricao: "Valores pessoais",
                                valor: '0',
                                user: saveduser._id
                            }).save();
                            res.send({data: saveduser, tipo: 1});
                        }).catch((err)=>{
                            res.send({resposta: 'Erro ao salvar o usuário, tente novamente!', tipo: 0})
                        })
                    }
                })
            });
        }
    }).catch((err)=>{

        res.send({resposta: 'Erro ao verificar se usuário já existe, tente novamente!', tipo: 0})
    });
});
router.post('/login', (req, res)=>{
    User.findOne({email: req.body.email}).then((user)=> {
        if (!user) {
            res.send({resposta: 'Usuário não registrado, cadastre-se!', tipo: 0})
        } else {
            bcrypt.compare(req.body.senha, user.senha, (erro, batem)=>{
                if(batem){
                    res.send({data: user, tipo: 1})
                }else{
                    res.send({resposta: 'Senha incorreta, tente novamente!', tipo: 0})
                }
            })
        }
    }).catch((err)=>{
        res.send({resposta: 'Erro ao procurar sua conta, tente novamente!', tipo: 0})
    });
});
router.post('/edit', (req, res)=>{
    User.findOne({_id: req.body.id}).then((user)=> {
        if (!user) {
            res.send({resposta: 'Usuário não registrado, cadastre-se!', tipo: 0})
        } else {
            user.nome = req.body.nome;
            if(req.body.senha != null && req.body.senha != ''){
                bcrypt.genSalt(10, (erro, salt)=>{
                    bcrypt.hash(req.body.senha, salt, (erro, hash)=>{
                        if(erro){
                            res.send({resposta: 'Erro ao encriptar sua senha, tente novamente!', tipo: 0})
                        }else{
                            user.senha = hash;

                        }
                    })
                });
            }
            user.save().then((resss)=>{
                res.send({tipo: 1, data:resss})
            })

        }
    }).catch((err)=>{
        res.send({resposta: 'Erro ao procurar sua conta, tente novamente!', tipo: 0})
    });
});
router.post('/upload', upload.single('perfil'),(req, res)=>{
    res.send('sucesso');
});
router.get('/teste2850928059280958209385023j02j3482j3984j2934j2934j', (req, res)=>{
    res.send(
        new Date(moment()).toString()+'<br>'+
        moment().format("DD/MM/YYYY HH:mm")+'<br>'+
        moment('14/05/2019 09:50', "DD/MM/YYYY HH:mm")
    );
});


module.exports = router;
