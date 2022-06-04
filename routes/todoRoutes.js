const express = require('express')
const todoController = require('../controllers/todoController')

const api = express.Router()
api.post('/crearTodo', todoController.crearTodo)
api.get('/obtenerTodos', todoController.obtenerTodos)
api.get('/obtenerTodo/:id', todoController.obtenerTodo)
api.get('/obtenerTodosPopulate', todoController.obtenerTodosPopulate)
api.get('/obtenerTodoPopulate/:id', todoController.obtenerTodoPopulate)
api.put('/actualizarTodo/:id', todoController.actualizarTodo)
api.delete('/eliminarTodo/:id', todoController.eliminarTodo)

module.exports = api