const Libros = require('../models/libro');

const registrarLibro = (req, res) => {
    const { titulo, autor, editorial, resumen } = req.body
    const libro = new Libros({
        titulo,
        autor,
        editorial,
        resumen
    })
    libro.save((err, libro) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al registrar libro" })
        }
        if (libro) {
            res.status(200).send({ "mensaje": "Libros registrado", "Libro": libro })
        }
    });
}

module.exports = {
    registrarLibro
}