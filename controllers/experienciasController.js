const Experiencias = require('../models/experiencias')

const registrarExperiencia = (req, res) => {
    const { nombreExperiencia, descripcionExperiencia, fechaInicioExperiencia, fechaFinExperiencia, lugarExperiencia } = req.body;
    const nuevaExperiencia = new Experiencias({
        nombreExperiencia,
        descripcionExperiencia,
        fechaInicioExperiencia,
        fechaFinExperiencia,
        lugarExperiencia
    })
    nuevaExperiencia.save((err, experiencia) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al registrar experiencia" })
        }
        if (experiencia) {
            res.status(201).send({ "mensaje": "Experiencia registrada", "experiencia": experiencia })
        }
    });
}

const obtenerExperiencias = (req, res) => {
    Experiencias.find({}, (err, experiencias) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al obtener experiencias" })
        }
        if (experiencias) {
            res.status(200).send({ "mensaje": "Experiencias obtenidas", "experiencias": experiencias })
        }
    })
}

const obtenerExperiencia = (req, res) => {
    const { id } = req.params
    Experiencias.findById(id, (err, experiencia) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al obtener experiencia" })
        }
        if (!experiencia) {
            res.status(404).send({ "mensaje": "No existe experiencia" })
        }
        if (experiencia) {
            res.status(200).send({ "mensaje": "Experiencia obtenida", "experiencia": experiencia })
        }
    })
}

const obtenerExperienciasPopulate = (req, res) => {
    Experiencias.find({}).populate('Lenguaje Idioma').exec((err, experiencias) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al obtener experiencias" })
        }
        if (experiencias) {
            res.status(200).send({ "mensaje": "Experiencias obtenidas", "experiencias": experiencias });
        }
    })
}

const obtenerExperienciaPopulate = (req, res) => {
    const { id } = req.params
    Experiencias.findById(id).populate('Lenguaje Idioma').exec((err, experiencia) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al obtener experiencia" })
        }
        if (!experiencia) {
            res.status(404).send({ "mensaje": "No existe experiencia" })
        }
        if (experiencia) {
            res.status(200).send({ "mensaje": "Experiencia obtenida", "experiencia": experiencia });
        }
    })
}

const actualizarExperiencia = (req, res) => {
    const { id } = req.params
    Experiencias.findByIdAndUpdate(id, req.body, (err, experiencia) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al actualizar experiencia" })
        }
        if (!experiencia) {
            res.status(404).send({ "mensaje": "No existe experiencia" })
        }
        if (experiencia) {
            res.status(200).send({ "mensaje": "Experiencia actualizada", "experiencia": experiencia });
        }
    })
}

module.exports = {
    registrarExperiencia,
    obtenerExperiencias,
    obtenerExperiencia,
    obtenerExperienciasPopulate,
    obtenerExperienciaPopulate,
    actualizarExperiencia
}