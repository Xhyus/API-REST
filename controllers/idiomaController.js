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

module.exports = {
    registrarIdioma
}