const express = require('express')
const libroController = require('../controllers/libroController')

const api = express.Router()
api.post('/crearLibro', libroController.registrarLibro)
api.get('/obtenerLibros', libroController.obtenerLibros)
api.get('/obtenerLibro/:id', libroController.obtenerLibro)
api.post('/obtenerLibrosPorAutor', libroController.obtenerLibrosPorAutor)
api.post('/obtenerLibroPorTitulo', libroController.obtenerLibroPorTitulo)
api.put('/actualizarLibro/:id', libroController.actualizarLibro)
api.delete('/eliminarLibro/:id', libroController.eliminarLibro)

module.exports = api