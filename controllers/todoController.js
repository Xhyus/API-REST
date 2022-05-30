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

const ObtenerTodoPopulate = (req, res) => {
    const { id } = req.params;
    ToDoS.findById(id).populate('Libro').exec((err, todo) => {
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

const actualizarTodo = (req, res) => {
    const { id } = req.params;
    ToDoS.findByIdAndUpdate(id, req.body, (err, todo) => {
        if (err) {
            res.status(400).send({ "mensaje": `Error al actualizar el ToDo` });
        }
        if (!todo) {
            res.status(400).send({ "mensaje": `No existe el ToDo` });
        }
        if (todo) {
            res.send({ "mensaje": "Se ha actualizado el ToDo", "ToDo": todo });
        }
    })
}

const eliminarTodo = (req, res) => {
    const { id } = req.params;
    ToDoS.findByIdAndDelete(id, (err, todo) => {
        if (err) {
            res.status(400).send({ "mensaje": `Error al eliminar el ToDo` });
        }
        if (!todo) {
            res.status(400).send({ "mensaje": `No existe el ToDo` });
        }
        if (todo) {
            res.send({ "mensaje": "Se ha eliminado el ToDo", "ToDo": todo });
        }
    })
}


module.exports = {
    crearTodo,
    obtenerTodos,
    obtenerTodo,
    ObtenerTodosPopulate,
    ObtenerTodoPopulate,
    actualizarTodo,
    eliminarTodo,
}