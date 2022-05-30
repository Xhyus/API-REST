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

const obtenerTodos = (req, res) => {
    ToDoS.find({}, (err, todos) => {
        if (err) {
            res.status(400).send({ "mensaje": `Error al obtener los ToDos` });
        }
        if (todos) {
            res.send({ "mensaje": "Se han obtenido los ToDos", "ToDos": todos });
        }
    })
}

const obtenerTodo = (req, res) => {
    const { id } = req.params;
    ToDoS.findById(id, (err, todo) => {
        if (err) {
            res.status(400).send({ "mensaje": `Error al obtener el ToDo` });
        }
        if (!todo) {
            res.status(400).send({ "mensaje": `No existe el ToDo` });
        }
        if (todo) {
            res.send({ "mensaje": "Se ha obtenido el ToDo", "ToDo": todo });
        }
    })
}

const ObtenerTodosPopulate = (req, res) => {
    ToDoS.find({}).populate('Libro').exec((err, todos) => {
        if (err) {
            res.status(400).send({ "mensaje": `Error al obtener los ToDos` });
        }
        if (todos) {
            res.send({ "mensaje": "Se han obtenido los ToDos", "ToDos": todos });
        }
    })
}


module.exports = {
    crearTodo,
    obtenerTodos,
    obtenerTodo,
    ObtenerTodosPopulate
}