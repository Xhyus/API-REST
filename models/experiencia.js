const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const experienciaSchema = new Schema({
    trabajos: [{
        type: String,
    }],
    estudios: [{
        type: String,
    }],
    idiomas: {
        type: [Schema.ObjectId],
        ref: 'Idioma'
    },
    lenguajes: {
        type: [Schema.ObjectId],
        ref: 'Lenguaje'
    },
    otros: [{
        type: String,
    }],
})
module.exports = mongoose.model('Experiencia', experienciaSchema);