import {modeloReservas}from '../models/modeloReservas.js'
export class ServicioReserva{

    constructor(){}

    async buscarTodas(){
        let Reservas=  await modeloReservas.find()
        return Reservas
    }
    async buscarPorId(id){
        let Reserva = await modeloReservas.find(id)
        return Reserva
    }
    async modificar(id,datos){
        return await modeloReservas.findByIdAndUpdate(id,datos)
    }
    async registrar(datos){
        let ReservaNueva =new modeloReservas(datos)
        return await ReservaNueva.save
    }
    async eliminar(id){
        return await modeloReservas.deleteOne({_id: id})
    }
}