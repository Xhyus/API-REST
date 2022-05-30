const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const lenguajeSchema = new Schema({
    nombreLenguaje: {
        type: String,
    }
})
module.exports = mongoose.model('Lenguaje', lenguajeSchema);