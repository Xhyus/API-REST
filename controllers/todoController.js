const ToDoS = require('../models/todo');

const crearTodo = (req, res) => {
    const { proyectosPorHacer, lenguajesPorEstudiar, idiomasPorAprender, librosPorLeer } = req.body;
    const todo = new ToDoS({
        proyectosPorHacer,
        lenguajesPorEstudiar,
        idiomasPorAprender,
        librosPorLeer
    });
    todo.save((err, todo) => {
        if (err) {
            res.status(400).send({ message: `Error al crear el ToDo` });
        }
        if (todo) {
            res.send({ "mensaje": "Se ha creado el ToDo", "ToDo": todo });
        }
    })
}

module.exports = {
    crearTodo
}