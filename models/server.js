const express = require('express');
const cors = require('cors');

const { socketController } = require('../controllers/socket.controller')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app)
        this.io = require('socket.io')(this.server)

        this.paths = {}

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

        //Eventos de Socket
        this.sockets()
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // Directorio Público
        this.app.use(express.static('public'));
    }

    routes() {
        //this.app.use(this.paths.auth, require('../routes/auth'));
    }

    sockets() {
        this.io.on("connection", socketController)
    }


    listen() {
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });

        //validar si el servidor de socket esta arriba. 
        //http://localhost:8080/socket.io/socket.io.js
    }

}


module.exports = Server;