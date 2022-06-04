const express = require('express');
const UsuarioController = require('../controllers/usuarioController')
const auth = require('../middlewares/auth.js')

const api = express.Router()
api.post('/registrarUsuario', UsuarioController.crearUsuario)
api.get('/obtenerUsuarios', UsuarioController.obtenerUsuarios)
api.get('/obtenerUsuario/:id', UsuarioController.obtenerUsuario)
api.get('/obtenerUsuariosPopulate', UsuarioController.obtenerUsuariosPopulate)
api.get('/obtenerUsuarioPopulate/:id', UsuarioController.obtenerUsuarioPopulate)
api.put('/actualizarUsuario/:id', UsuarioController.actualizarUsuario)
api.delete('/eliminarUsuario/:id', UsuarioController.eliminarUsuario)
api.post('/login', UsuarioController.login)
api.post('/cambiarPassword', auth.isAuth, UsuarioController.cambiarPassword)

module.exports = api