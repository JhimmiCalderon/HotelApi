import { ServicioReserva } from "../services/ServicioReserva.js"

export class ControladorReservas{
    constructor(){}

    async buscarTodas(request,response){
        try{
            let servicioReserva = new ServicioReserva()
            response.status(200).json({
                "mensaje":"exito buscando los datos",
                "datos":await servicioReserva.buscarTodas
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
    async buscarPorId(request,response){
        try{
            let servicioReserva = new ServicioReserva()
            let id=request.params.id
            response.status(200).json({
                "mensaje":"exito buscando los datos",
                "datos":await servicioReserva.buscarPorId
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
    async modificar(request,response){
        try{
            let servicioReserva = new ServicioReserva()
            let id=request.params.id
            let datos=request.body
            let respuesta = await servicioReserva.modificar(id,datos)
            response.status(200).json({
                "mensaje":"exito buscando los datos",
                "datos":respuesta
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
    async registrar(request,response){
        try{
            let servicioReserva = new ServicioReserva()
            let datos=request.body
            let respuesta = await servicioReserva.registrar(datos)
            //tomar 2 fechas del objeto datos
            //la diferenciaa en dias de esas dos fechas
            response.status(200).json({
                "mensaje":"exito buscando los datos",
                "datos":respuesta,
                "diferencia":"diferencia en dia calculada"
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
    async eliminar(request,response){
        try{
            let servicioReserva = new ServicioReserva()
            let id=request.params.id
            let respuesta = await servicioReserva.eliminar(id)
            response.status(200).json({
                "mensaje":"exito buscando los datos",
                "datos":respuesta
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
}