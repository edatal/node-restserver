require('dotenv').config();

//importar clase Server
const Server = require('./models/server');

//Inicializar Server
const server = new Server();

//Escuchar puerto
server.listen();