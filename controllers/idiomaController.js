const Idiomas = require('../models/idioma');

const registrarIdioma = (req, res) => {
    const { nombreIdioma } = req.body;
    const nuevoIdioma = new Idiomas({
        nombreIdioma
    });
    nuevoIdioma.save((err, idioma) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al registrar idioma" });
        }
        if (idioma) {
            res.status(201).send({ "mensaje": "Idioma registrado", "idioma": idioma });
        }
    });
}

const obtenerIdiomas = (req, res) => {
    Idiomas.find({}, (err, idiomas) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al obtener idiomas" });
        }
        if (idiomas) {
            res.status(200).send({ "mensaje": "Idiomas obtenidos", "idiomas": idiomas });
        }
    });
}

module.exports = {
    registrarIdioma,
    obtenerIdiomas
}