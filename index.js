const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config();

const experienciasRoutes = require('./routes/experienciasRoutes')
const idiomaRoutes = require('./routes/idiomaRoutes')
const usuarioRoutes = require('./routes/usuarioRoutes')
const lenguajeRoutes = require('./routes/lenguajeRoutes')
const todoRoutes = require('./routes/todoRoutes')
const libroRoutes = require('./routes/libroRoutes')

const app = express()
app.use(cors())
app.use(express.json())
app.options('*', cors())

const options = {
    useNewUrlParser: true,
    autoIndex: true,
    keepAlive: true,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4,
    useUnifiedTopology: true
}

mongoose.connect(process.env.URL, options, function (error) {
    if (error) {
        console.log(error)
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

module.exports = app;