const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/ativo');
const Ativo = mongoose.model('ativos');

router.post('/list', (req, res)=>{
    Ativo.find({user: req.body.id}).then((ativos)=>{
        res.send({tipo: 1, data: ativos});
    }).catch((err)=>{
        res.send({tipo:0, resposta: 'Erro ao carregar a lista de Pessoas e Empresas!'})
    });
});
router.post('/add', (req, res)=>{
    new Ativo(req.body).save().then((ativo)=>{
        res.send({tipo:1});
    }).catch((err)=>{
        res.send({tipo:0, resposta: 'Erro ao salvar o cadastro, tente novamente!: '+err})
    });
});
router.post('/editar', (req, res)=>{
    Ativo.findOne({_id: req.body._id}).then((ativo)=>{
        if(ativo){
            ativo.nome = req.body.nome;
            ativo.descricao = req.body.descricao;
            ativo.valor = req.body.valor;
            ativo.save().then(()=>{
                res.send({tipo:1});
            }).catch((err)=>{
                res.send({tipo:0, resposta: 'Erro ao salvar o cadastro, tente novamente!: '})
            });
        }else{
            res.send({tipo:0, resposta: 'Erro ao encontrar o cadastro, tente novamente!: '})
        }
    }).catch((err)=>{
        res.send({tipo:0, resposta: 'Erro ao procurar o cadastro, tente novamente!: '+err})
    });
});
router.post('/excluir', (req, res)=>{
    Ativo.remove({_id: req.body.id}).then(()=>{
        res.send({tipo: 1})
    }).catch((err)=>{
        res.send({tipo:0, resposta: 'Erro ao excluir o cadastro, tente novamente!: '})
    })
});


module.exports = router;