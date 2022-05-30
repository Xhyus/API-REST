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

module.exports = {
    registrarLenguaje
}