import {modeloHabitacion}from '../models/modeloHabitacion.js'
export class ServicioHabitacion{

    constructor(){}

    async buscarTodas(){
        let habitaciones=  await modeloHabitacion.find()
        return habitaciones
    }
    async buscarPorId(id){
        let habitacion = await modeloHabitacion.find(id)
        return habitacion
    }
    async modificar(id,datos){
        return await modeloHabitacion.findByIdAndUpdate(id,datos)
    }
    async registrar(datos){
        let habitacionNueva =new modeloHabitacion(datos)
        return await habitacionNueva.save
    }
    async eliminar(id){
        return await modeloHabitacion.deleteOne({_id: id})
    }
}