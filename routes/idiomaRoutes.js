const express = require('express')
const idiomaController = require('../controllers/idiomaController')

const api = express.Router()

api.post('/crearIdioma', idiomaController.registrarIdioma)
api.get('/obtenerIdiomas', idiomaController.obtenerIdiomas)
api.get('/obtenerIdioma/:id', idiomaController.obtenerIdioma)
api.post('/obtenerIdiomaPorNombre', idiomaController.obtenerIdiomaPorNombre)
api.put('/actualizarIdioma/:id', idiomaController.actualizarIdioma)
api.delete('/eliminarIdioma/:id', idiomaController.eliminarIdioma)

module.exports = api