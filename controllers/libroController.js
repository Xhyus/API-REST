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

const obtenerLibros = (req, res) => {
    Libros.find({}, (err, libros) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al obtener libros" })
        }
        if (libros) {
            res.status(200).send({ "mensaje": "Libros obtenidos", "libros": libros })
        }
    });
}

const obtenerLibro = (req, res) => {
    const { id } = req.params;
    Libros.findById(id, (err, libro) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al obtener libro" })
        }
        if (!libro) {
            res.status(404).send({ "mensaje": "Libro no encontrado" })
        }
        if (libro) {
            res.status(200).send({ "mensaje": "Libro obtenido", "libro": libro })
        }
    })
}

const actualizarLibro = (req, res) => {
    const { id } = req.params;
    Libros.findByIdAndUpdate(id, req.body, (err, libro) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al actualizar libro" })
        }
        if (!libro) {
            res.status(404).send({ "mensaje": "Libro no encontrado" })
        }
        if (libro) {
            res.status(200).send({ "mensaje": "Libro actualizado", "libro": libro })
        }
    })
}

const eliminarLibro = (req, res) => {
    const { id } = req.params;
    Libros.findByIdAndDelete(id, (err, libro) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al eliminar libro" })
        }
        if (!libro) {
            res.status(404).send({ "mensaje": "Libro no encontrado" })
        }
        if (libro) {
            res.status(200).send({ "mensaje": "Libro eliminado", "libro": libro })
        }
    })
}


module.exports = {
    registrarLibro,
    obtenerLibros,
    obtenerLibro,
    actualizarLibro,
    eliminarLibro
}