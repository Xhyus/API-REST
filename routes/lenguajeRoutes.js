const express = require('express')
const lenguajeController = require('../controllers/lenguajeController')

const api = express.Router()

api.post('/crearLenguaje', lenguajeController.registrarLenguaje)
api.get('/obtenerLenguajes', lenguajeController.obtenerLenguajes)
api.get('/obtenerLenguaje/:id', lenguajeController.obtenerLenguaje)
api.post('/obtenerLenguajePorNombre', lenguajeController.obtenerLenguajePorNombre)
api.put('/actualizarLenguaje/:id', lenguajeController.actualizarLenguaje)
api.delete('/eliminarLenguaje/:id', lenguajeController.eliminarLenguaje)

module.exports = api