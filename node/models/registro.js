const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Registro = new Schema({
    ativo:{
        type: Schema.Types.ObjectId,
        ref: 'ativos',
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    valor: {
        type:String,
        required: true
    },
    descricao: {
        type: String
    },
    data: {
        type: Date,
        default: new Date()
    }
});
mongoose.model('registros', Registro);