const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const libroSchema = new Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    editorial: {
        type: String,
        required: true
    },
    resumen: {
        type: String,
        required: true
    },
})
module.exports = mongoose.model('Libro', libroSchema);