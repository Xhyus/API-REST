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

module.exports = {
    registrarExperiencia
}