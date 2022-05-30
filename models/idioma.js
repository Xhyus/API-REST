const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const idiomaSchema = new Schema({
    nombreIdioma: {
        type: String,
    }
})
module.exports = mongoose.model('Idioma', idiomaSchema);