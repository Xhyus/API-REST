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

module.exports = {
    crearUsuario,
}