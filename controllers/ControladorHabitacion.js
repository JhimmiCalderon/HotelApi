import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorHabitacion{
    constructor(){}

    async buscarTodas(request,response){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            response.status(200).json({
                "mensaje":"exito buscando los datos",
                "datos": await servicioHabitacion.buscarTodas
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
    async buscarPorId(request,response){
        try{
            let servicioHabitacion = new ServicioHabitacion(id)
            let id=request.params.id
            response.status(200).json({
                "mensaje":"exito buscando los datos",
                "datos":await servicioHabitacion.buscarPorId
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
    async modificar(request,response){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            let id=request.params.id
            let datos=request.body
            let respuesta = await servicioHabitacion.modificar(id,datos) //esto
            response.status(200).json({
                "mensaje":"exito buscando los datos",
                "datos": respuesta
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
    async registrar(request,response){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            let datos=request.body
            //tomar 2 fechas del objeto datos
            //la diferencia en dias de es dos fechas
            // let respuesta = await servicioHabitacion.registrar(datos)
            response.status(200).json({
                "mensaje":"exito registrando los datos",
                "datos": datos,
                "diferencia":"dia calculado"
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
    async eliminar(request,response){
        try{
            let servicioHabitacion = new ServicioHabitacion()
            let id=request.params.id
            let respuesta = await servicioHabitacion.eliminar(id)
            response.status(200).json({
                "mensaje":"exito buscando los datos",
                "datos": respuesta
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallamos"+error
            })
        }
    }
}