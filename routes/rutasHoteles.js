//espacio para definir la s rutas
//o endpoints especificos de su Api
import express from "express";

//importo los controladores
import { ControladorHabitacion } from "../controllers/ControladorHabitacion.js";
import { ControladorReservas } from "../controllers/ControladorReservas.js";

export let rutasAPI = express.Router();

//Aca pone sus endpoints
//Atendiendo peticiones habitaciones
rutasAPI.post("/api/habitaciones");
rutasAPI.get("/api/habitaciones");
rutasAPI.get("/api/habitacion/:id");//los dos puntos identifican el parametro o variable del dato que se va devolver
rutasAPI.put("/api/habitaciones/:id");//editar siembre va por body pero hay que enviar parametros
rutasAPI.delete("/api/habitaciones/:id");//en el header un solo dato --parametros

//Atendiento Reservas

rutasAPI.post("/api/reservas");
rutasAPI.get("/api/reservas");
rutasAPI.get("/api/reserva/:id");
rutasAPI.put("/api/reservas/:id");
rutasAPI.delete("/api/reservas/:id");


//notas: header se envia solo un dato y/o parametro
// body : varios datos ---> más de un dato