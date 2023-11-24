
import express from "express";
import { rutasAPI } from "./routes/rutasHoteles.js";
import { establecerConexionBD } from "./database/conexion.js";

export class Api {
  constructor() {
    this.app = express();
    this.conectarBD()
    this.procesarPeticiones()
  }

  
  levantarServidor() {
    this.app.listen(3000, function () {
      console.log("servidor operando");
    });
  }

  procesarPeticiones() {
    this.app.use(express.json())
    this.app.use('/',rutasAPI)
  }
  
 
conectarBD(){
  establecerConexionBD()
}
}

