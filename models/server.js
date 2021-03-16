import express from "express";
import cors from "cors";
import { dbconnection } from "../database/config.js";

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT
            //base de datos
        this.conectarDB();
        //middlewares
        this.middlewares();
        //rutas
        this.routes();
    }
    async conectarDB() {
        await dbconnection();
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'))


    }
    routes() {

    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        })
    }
}
export { Server }