const Experiencias = require('../models/experiencias')

const registrarExperiencia = (req, res) => {
    const { nombreExperiencia, descripcionExperiencia, fechaInicioExperiencia, fechaFinExperiencia, lugarExperiencia } = req.body;
    const nuevaExperiencia = new Experiencias({
        nombreExperiencia,
        descripcionExperiencia,
        fechaInicioExperiencia,
        fechaFinExperiencia,
        lugarExperiencia
    });
    nuevaExperiencia.save((err, experiencia) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al registrar experiencia" });
        }
        if (experiencia) {
            res.status(201).send({ "mensaje": "Experiencia registrada", "experiencia": experiencia });
        }
    });
}

const obtenerExperiencias = (req, res) => {
    Experiencias.find({}, (err, experiencias) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al obtener experiencias" });
        }
        if (experiencias) {
            res.status(200).send({ "mensaje": "Experiencias obtenidas", "experiencias": experiencias });
        }
    });
}

module.exports = {
    registrarExperiencia,
    obtenerExperiencias
}