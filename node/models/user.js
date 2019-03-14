const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    senha: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
});

mongoose.model('users', User);