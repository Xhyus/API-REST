const express = require('express')
const experienciaController = require('../controllers/experienciaController')

const api = express.Router()

api.post('/crearExperiencia', experienciaController.registrarExperiencia)
api.get('/obtenerExperiencias', experienciaController.obtenerExperiencias)
api.get('/obtenerExperiencia/:id', experienciaController.obtenerExperiencia)
api.get('/obtenerExperienciasPopulate', experienciaController.obtenerExperienciasPopulate)
api.get('/obtenerExperienciaPopulate/:id', experienciaController.obtenerExperienciaPopulate)
api.put('/actualizarExperiencia/:id', experienciaController.actualizarExperiencia)
api.delete('/eliminarExperiencia/:id', experienciaController.eliminarExperiencia)

module.exports = api