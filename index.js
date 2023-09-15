//Aqui estoy importando la herramienta
const express = require('express')
const app = express()

//Atendiendo peticiones
app.post('/api/habitaciones', function (req, res) {
  res.send('Estoy Guardando una Habitación')
})
app.get('/api/habitaciones', function (req, res) {
  res.send('Estoy Buscando Todas Las Habitaciones')
})
app.get('/api/habitacion', function (req, res) {
  res.send('Estoy Buscando una Habitación')
})
app.put('/api/habitaciones', function (req, res) {
  res.send('Estoy Actualizando una Habitación')
})
app.delete('/api/habitaciones', function (req, res) {
  res.send('Estoy eliminando una Habitación')
})

//Levantando un servidor
app.listen(3000,function(){
    console.log("servidor operando")
})