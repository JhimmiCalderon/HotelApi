//espacio para definir la s rutas
//o endpoints especificos de su Api
import express from 'express';

export let rutasAPI = express.Router();

//Aca pone sus endpoints
//Atendiendo peticiones habitaciones
rutasAPI.post("/api/habitaciones", function (req, res) {
    res.send("Estoy Guardando una Habitación");
  });
  rutasAPI.get("/api/habitaciones", function (req, res) {
    res.send("Estoy Buscando Todas Las Habitaciones");
  });
  rutasAPI.get("/api/habitacion", function (req, res) {
    res.send("Estoy Buscando una Habitación");
  });
  rutasAPI.put("/api/habitaciones", function (req, res) {
    res.send("Estoy Actualizando una Habitación");
  });
  rutasAPI.delete("/api/habitaciones", function (req, res) {
    res.send("Estoy eliminando una Habitación");
  });

  //Atendiento Reservas

  rutasAPI.post("/api/reservas", function (req, res) {
    res.send("Estoy Guardando una Reserva");
  });
  rutasAPI.get("/api/reservas", function (req, res) {
    res.send("Estoy Buscando Todas Las Reservas");
  });
  rutasAPI.get("/api/reserva", function (req, res) {
    res.send("Estoy Buscando una Reserva");
  });
  rutasAPI.put("/api/reservas", function (req, res) {
    res.send("Estoy Actualizando una Reserva");
  });
  rutasAPI.delete("/api/reservas", function (req, res) {
    res.send("Estoy eliminando una Reserva");
  });