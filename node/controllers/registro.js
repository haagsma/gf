const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/registro');
const Registro = mongoose.model('registros');
require('../models/ativo');
const Ativo = mongoose.model('ativos');

router.post('/detalhes', (req, res)=>{
    Registro.find({ativo: req.body.id}).populate('ativo').sort({data: 'desc'}).then((registros)=>{
        if(registros){
            res.send({tipo:1, data:registros});
        }else{
            res.send({tipo: 0, resposta: 'Nenhum registro encontrado!'})
        }
    }).catch((err)=>{
        res.send({tipo:0, resposta: 'Houve um erro ao consultar os registros!'+err})
    });
});
router.post('/gastos', (req, res)=>{
    let envia = [];
    Ativo.find({user: req.body.id}).then((ativos)=>{
        ativos.forEach((item, index)=> {
            Registro.find({ativo: item._id, tipo: 'gasto'}).sort({data: 'desc'}).then((registros)=>{
                if(registros && registros.length > 0) {
                    registros.forEach((itemRegistro)=>{
                        envia.push(itemRegistro);
                    });

                }
                if (index == (ativos.length - 1)) {
                    console.log(envia);
                    res.send({tipo: 1, data: envia});
                }
            }).catch((err)=>{
                res.send({tipo:0, resposta: 'Houve um erro ao consultar os registros!'+err})
            });
        })
    }).catch((err)=>{
        res.send({tipo:0, resposta: 'Houve um erro ao consultar os registros dos ativos!'+err})
    });
});
router.post('/ganhos', (req, res)=>{
    let envia = [];
    Ativo.find({user: req.body.id}).then((ativos)=>{
        ativos.forEach((item, index)=> {
            Registro.find({ativo: item._id, tipo: 'pago'}).sort({data: 'desc'}).then((registros)=>{
                if(registros && registros.length > 0) {
                    registros.forEach((itemRegistro)=>{
                        envia.push(itemRegistro);
                    });

                }
                if (index == (ativos.length - 1)) {
                    console.log(envia);
                    res.send({tipo: 1, data: envia});
                }
            }).catch((err)=>{
                res.send({tipo:0, resposta: 'Houve um erro ao consultar os registros!'+err})
            });
        })
    }).catch((err)=>{
        res.send({tipo:0, resposta: 'Houve um erro ao consultar os registros dos ativos!'+err})
    });
});

router.post('/add', (req, res)=>{
    new Registro(req.body).save().then((registro)=>{
        Ativo.findOne({_id: req.body.ativo}).then((usuario)=>{
            let temp;
            if(registro.tipo == 'gasto'){
                temp  = Number(usuario.valor) - Number(registro.valor);
                usuario.valor = temp.toFixed(2)
            }else if(registro.tipo == 'pago'){
                temp  = Number(usuario.valor) + Number(registro.valor);
                usuario.valor = temp.toFixed(2)
            }
            usuario.save().then(()=>{
                res.send({tipo:1})
            }).catch((err)=>{
                registro.remove();
                res.send({tipo:0, resposta: 'Houve um erro ao salvar o registro no usuário, tente novamente!'})
            })
        }).catch((err)=>[
            res.send({tipo:0, resposta: 'Houve um erro ao encontrar o usuário para salvar o registro, tente novamente!'+err})
        ]);
    }).catch((err)=>{
        res.send({tipo:0, resposta: 'Houve um erro ao salvar o registro, tente novamente!'+err})
    })
});
router.post('/total', (req, res)=>{
    let total = {
        gasto: 0,
        ganho: 0
    };
    Ativo.find({user: req.body.id}).then((ativos)=>{
        ativos.forEach((item, index)=> {
            Registro.find({ativo: item._id}).sort({data: 'desc'}).then((registros)=>{
                if(registros && registros.length > 0) {
                    registros.forEach((itemRegistro)=>{
                        if(itemRegistro.tipo == 'pago'){
                            total.ganho += Number(itemRegistro.valor);
                        }else{
                            total.gasto += Number(itemRegistro.valor);
                        }
                    });

                }
                if (index == (ativos.length - 1)) {
                    res.send({tipo: 1, data: total});
                }
            }).catch((err)=>{
                res.send({tipo:0, resposta: 'Houve um erro ao consultar os registros!'+err})
            });
        })
    }).catch((err)=>{
        res.send({tipo:0, resposta: 'Houve um erro ao consultar os registros dos ativos!'+err})
    });
});
module.exports = router;