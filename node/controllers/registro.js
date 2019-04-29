const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/registro');
const Registro = mongoose.model('registros');
require('../models/ativo');
const Ativo = mongoose.model('ativos');

router.post('/detalhes', (req, res)=>{
    Registro.find({ativo: req.body.id}).populate('ativo').sort({_id: 'desc'}).then((registros)=>{
        if(registros){
            res.send({tipo:1, data:registros});
        }else{
            res.send({tipo: 0, resposta: 'Nenhum registro encontrado!'})
        }
    }).catch((err)=>{
        res.send({tipo:0, resposta: 'Houve um erro ao consultar os registros!'+err})
    });
});
router.post('/gastos',async (req, res)=>{
    let envia = [];
    await Ativo.find({user: req.body.id}).sort({_id: 'desc'}).then(async (ativos)=>{
        await ativos.forEach(async (item, index)=> {
            let cursor = await Registro.find({ativo: item._id, tipo: 'gasto'}).sort({_id: 'desc'}).cursor();
            cursor.on('data', async (data)=>{
                envia.push(data);
            });
            cursor.on('close', ()=>{
                if (index === (ativos.length - 1)) {
                    console.log(envia);
                    res.send({tipo: 1, data: envia});
                }
            });

        })
    }).catch((err)=>{
        res.send({tipo:0, resposta: 'Houve um erro ao consultar os registros dos ativos!'+err})
    });
});
router.post('/ganhos', async (req, res)=>{
    let envia = [];
    await Ativo.find({user: req.body.id}).sort({_id: 'desc'}).then(async (ativos)=>{
        await ativos.forEach(async (item, index)=> {
            let cursor = await Registro.find({ativo: item._id, tipo: 'pago'}).sort({_id: 'desc'}).cursor();
            cursor.on('data', async (data)=>{
                envia.push(data);
            });
            cursor.on('close', ()=>{
                if (index === (ativos.length - 1)) {
                    console.log(envia);
                    res.send({tipo: 1, data: envia});
                }
            });

        })
    }).catch((err)=>{
        res.send({tipo:0, resposta: 'Houve um erro ao consultar os registros dos ativos!'+err})
    });
});

router.post('/total',async (req, res)=>{
    let total = {
        gasto: 0,
        ganho: 0
    };
    await Ativo.find({user: req.body.id}).then( async (ativos)=>{
        await ativos.forEach( async (item, index)=> {
            let cursor = await Registro.find({ativo: item._id}).sort({_id: 'desc'}).cursor();
            if(item){
                await cursor.on('data', async (data)=>{
                    if(data.tipo === 'pago'){
                        total.ganho += Number(data.valor);
                    }else{
                        total.gasto += Number(data.valor);
                    }
                });
                cursor.on('close', ()=>{
                    if (index >= (ativos.length - 1)) {
                        res.send({tipo: 1, data: total});
                    }
                });
            }
        });
    }).catch((err)=>{
        res.send({tipo:0, resposta: 'Houve um erro ao consultar os registros dos ativos!'+err})
    });

});
router.post('/add', (req, res)=>{
    // let novoRegistro = req.body;
    // novoRegistro.data = new Date();
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
module.exports = router;