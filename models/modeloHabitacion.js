import mongoose from "mongoose"//permite hacer modelos

const Schema = mongoose.Schema //atributo de mongoose

const Habitacion = new Schema({
    nombre:{
        type:String,
        required: true
    },
    foto:{
        type:String,
        required: true
    },
    descripcion:{
        type:String,
        required: true
    },
    precio_noche:{
        type:Number,
        required:true
    }
})

export const modeloHabitacion = mongoose.model('habitaciones',Habitacion)//esto en conjunto es un modelo