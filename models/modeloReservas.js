import mongoose from "mongoose"

const Schema = mongoose.Schema

const Reserva = new Schema({
nombreCliente:{
    type: String,
    required: true
},
apellidoCliente:{
    type: String,
    required: true
},
telefonoCliente:{
    type: Number,
    required: true
},
fechaInicioReserva:{
    type: Date,
    required: true
},
fechaFinalReserva:{
    type: Date,
    required: true
},
cantidadPersonas:{
    type: Number,
    required: true
},
})

export const modeloReservas = mongoose.model('Reservas',Reserva)