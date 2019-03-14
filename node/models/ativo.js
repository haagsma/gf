const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Ativo = new Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String
    },
    valor: {
        type: String,
        default: '0'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
});

mongoose.model('ativos', Ativo);