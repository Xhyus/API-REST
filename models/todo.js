const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema = new Schema({
    proyectosPorHacer: [{
        type: String,
    }],
    lenguajesPorEstudiar: [{
        type: String,
    }],
    idiomasPorAprender: [{
        type: String,
    }],
    librosPorLeer: {
        type: [Schema.ObjectId],
        ref: 'Libro'
    },
})
module.exports = mongoose.model('ToDo', todoSchema);