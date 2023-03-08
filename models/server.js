const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares (funcion para ejecutarse cuando levanto el servidor)
        this.middlewares();

        //Rutas de la aplicacion
        this.routes();
    }

    //Metodo de middlewares
    middlewares() {

        //Cors
        this.app.use( cors() );

        //Lectura y Parseo del Body (middleware)
        this.app.use( express.json() );

        //Directorio publico
        this.app.use( express.static('public') );
    }

    //Metodo de rutas (REST API)
    routes() {

        //Middleware por cierta ruta (condicional)
        this.app.use( this.usuariosPath, require('../routes/usuarios') );
        
    }

    //Metodo para escuchar puerto
    listen() {

        this.app.listen( this.port, () => {
            console.log("On port: ", this.port);
        });
    }

}

module.exports = Server;