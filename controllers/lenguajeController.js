const Lenguajes = require('../models/lenguajeModel');

const registrarLenguaje = (req, res) => {
    const { nombreLenguaje } = req.body;
    const nuevoLenguaje = new Lenguajes({
        nombreLenguaje
    });
    nuevoLenguaje.save((err, lenguaje) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al registrar lenguaje" });
        }
        if (lenguaje) {
            res.status(201).send({ "mensaje": "Lenguaje registrado", "lenguaje": lenguaje });
        }
    });
}

const obtenerLenguajes = (req, res) => {
    Lenguajes.find({}, (err, lenguajes) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al obtener lenguajes" });
        }
        if (lenguajes) {
            res.status(200).send({ "mensaje": "Lenguajes obtenidos", "lenguajes": lenguajes });
        }
    });
}

const obtenerLenguaje = (req, res) => {
    const { id } = req.params;
    Lenguajes.findById(id, (err, lenguaje) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al obtener lenguaje" });
        }
        if (!lenguaje) {
            res.status(404).send({ "mensaje": "Lenguaje no encontrado" });
        }
        if (lenguaje) {
            res.status(200).send({ "mensaje": "Lenguaje obtenido", "lenguaje": lenguaje });
        }
    })
}

const actualizarLenguaje = (req, res) => {
    const { id } = req.params;
    const { nombreLenguaje } = req.body;
    Lenguajes.findByIdAndUpdate(id, { nombreLenguaje }, (err, lenguaje) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al actualizar lenguaje" });
        }
        if (!lenguaje) {
            res.status(404).send({ "mensaje": "Lenguaje no encontrado" });
        }
        if (lenguaje) {
            res.status(200).send({ "mensaje": "Lenguaje actualizado", "lenguaje": lenguaje });
        }
    })
}

const eliminarLenguaje = (req, res) => {
    const { id } = req.params;
    Lenguajes.findByIdAndDelete(id, (err, lenguaje) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al eliminar lenguaje" });
        }
        if (!lenguaje) {
            res.status(404).send({ "mensaje": "Lenguaje no encontrado" });
        }
        if (lenguaje) {
            res.status(200).send({ "mensaje": "Lenguaje eliminado", "lenguaje": lenguaje });
        }
    })
}

const obtenerLenguajePorNombre = (req, res) => {
    const { nombreLenguaje } = req.params;

    Lenguajes.findOne({ nombreLenguaje }, (err, lenguaje) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al obtener lenguaje" });
        }
        if (!lenguaje) {
            res.status(404).send({ "mensaje": "Lenguaje no encontrado" });
        }
        if (lenguaje) {
            res.status(200).send({ "mensaje": "Lenguaje obtenido", "lenguaje": lenguaje });
        }
    })
}

module.exports = {
    registrarLenguaje,
    obtenerLenguajes,
    obtenerLenguaje,
    actualizarLenguaje,
    eliminarLenguaje,
    obtenerLenguajePorNombre
}