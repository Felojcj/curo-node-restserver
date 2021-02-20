const express = require('express'),
  cors = require('cors')

class Server {

  constructor() {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.usuariosPath = '/api/usuarios'

   // Middlewares
    this.middlewares()

    // Rutas
    this.routes()
  }

  middlewares() {
    // CORS
    this.app.use(cors())
    // Lectura y Parseo del body
    this.app.use(express.json())
    // Directorio Publico
    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.usuariosPath, require('../routes/user'))
  }

  listen() {
    this.app.listen(this.port || 3000, () => {
      console.log(`Servidor corriendo en http://localhost:${this.port}`)
    })
  }
}

module.exports = Server
