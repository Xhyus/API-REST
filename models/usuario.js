const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    experiencia: {
        type: Schema.Types.ObjectId,
        ref: 'Experiencia'
    },
    todo: {
        type: Schema.Types.ObjectId,
        ref: 'ToDo'
    },
})
module.exports = mongoose.model('Usuario', usuarioSchema);