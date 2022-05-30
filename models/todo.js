const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    proyectosPorHacer: [{
        type: String,
    }],
    lenguajesPorEstudiar: {
        type: [Schema.ObjectId],
        ref: 'Lenguaje'
    },
    idiomasPorAprender: {
        type: [Schema.ObjectId],
        ref: 'Idioma'
    },
    librosPorLeer: {
        type: [Schema.ObjectId],
        ref: 'Libro'
    },
})
module.exports = mongoose.model('ToDo', todoSchema);