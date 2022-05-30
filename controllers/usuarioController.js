const Usuarios = require('../models/usuario')

const crearUsuario = async (req, res) => {
    const passHash = await bcrypt.hash(req.body.password, 10)
    const { nombre, apellido, email, experiencias, todo } = req.body
    const nuevoUsuario = new Usuarios({
        nombre,
        apellido,
        email,
        password: passHash,
        experiencias,
        todo
    })
    nuevoUsuario.save((err, usuario) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al registrar usuario" })
        }
        if (usuario) {
            res.status(201).send({ "mensaje": "Usuario registrado", "usuario": usuario })
        }
    })
}

const obtenerUsuarios = (req, res) => {
    Usuarios.find({}, (err, usuarios) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al obtener usuarios" })
        }
        if (usuarios) {
            res.status(200).send({ "mensaje": "Usuarios obtenidos", "usuarios": usuarios })
        }
    })
}

const obtenerUsuario = (req, res) => {
    const { id } = req.params
    Usuarios.findById(id, (err, usuario) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al obtener usuario" })
        }
        if (!usuario) {
            res.status(404).send({ "mensaje": "No existe usuario" })
        }
        if (usuario) {
            res.status(200).send({ "mensaje": "Usuario obtenido", "usuario": usuario })
        }
    })
}

const obtenerUsuariosPopulate = (req, res) => {
    Usuarios.find({}).populate('Experiencias ToDo').exec((err, usuarios) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al obtener usuarios" })
        }
        if (usuarios) {
            res.status(200).send({ "mensaje": "Usuarios obtenidos", "usuarios": usuarios });
        }
    })
}

const obtenerUsuarioPopulate = (req, res) => {
    const { id } = req.params
    Usuarios.findById(id).populate('Experiencias ToDo').exec((err, usuario) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al obtener usuario" })
        }
        if (!usuario) {
            res.status(404).send({ "mensaje": "No existe usuario" })
        }
        if (usuario) {
            res.status(200).send({ "mensaje": "Usuario obtenido", "usuario": usuario });
        }
    })
}

const actualizarUsuario = (req, res) => {
    const { id } = req.params
    const { nombre, apellido, email, experiencias, todo } = req.body
    Usuarios.findByIdAndUpdate(id, { nombre, apellido, email, experiencias, todo }, (err, usuario) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al actualizar usuario" })
        }
        if (!usuario) {
            res.status(404).send({ "mensaje": "No existe usuario" })
        }
        if (usuario) {
            res.status(200).send({ "mensaje": "Usuario actualizado", "usuario": usuario })
        }
    })
}

const eliminarUsuario = (req, res) => {
    const { id } = req.params
    Usuarios.findByIdAndDelete(id, (err, usuario) => {
        if (err) {
            res.status(400).send({ "mensaje": "Error al eliminar usuario" })
        }
        if (!usuario) {
            res.status(404).send({ "mensaje": "No existe usuario" })
        }
        if (usuario) {
            res.status(200).send({ "mensaje": "Usuario eliminado", "usuario": usuario })
        }
    })
}

module.exports = {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuario,
    obtenerUsuariosPopulate,
    obtenerUsuarioPopulate,
    actualizarUsuario,
    eliminarUsuario
}