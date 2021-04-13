require('dotenv').config(); //para que utilice la configuracion y corra en el puerto 8080

const Server = require('./models/server')

const server = new Server();


server.listen()