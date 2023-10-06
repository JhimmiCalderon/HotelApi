import { request, response } from "express"

export class ControladorReservas{
    constructor(){
        buscarTodas(request,response){
            try{
                //1. hay que recibir datos
                //2.Intentare conectarme a la base de datos
                //3.Envio la Respuesta
                response.status(200).json({
                    'estado':true,
                    'mensaje': 'Exito buscando las Reservas',
                    'datos'://'aca van los datos de consultados'
                })
            }catch(error){
                response.status(400).json({
                    'estado':false,
                    'mensaje':'fallamos buscando las reservas'+error,
                    'datos':null
                })
            }
        }
        buscarPorId(request,response){
            try{
                //1.Hay que recibir datos(si)
                let id=request.params.id
                //2.Con el id que mando el cliente busco la habitacion en BD
                //3.Respondo al cliente
                response.status(200).json({
                    'estado':true,
                    'mensaje': 'Exito buscando la reserva',
                    'datos'://'aca van los datos de consultados'
                })
            }catch(error){
                response.status(400).json({
                    'estado':false,
                    'mensaje':'fallamos buscando la reserva'+error,
                    'datos':null
                })
            }
        }
        modificarReserva(request,response){
            try{
                //1. Hay que recibir datos (si), se envia parametro por url, y por body los datos nuevos
                let id=request.params.id
                let datosModificar=request.body
                //Modificar en BD
                //3.Enviar respuesta
                response.status(200).json({
                    'estado':true,
                    'mensaje': 'Exito modificando la reserva',
                    'datos':null
                })
            }catch(error){
                response.status(400).json({
                    'estado':false,
                    'mensaje':'fallamos modificando la reserva'+error,
                    'datos':null
                })
            }
        }
        registrar(request,response){
            try{
                //1.Hay que recibir datos
                let datosRegistrar = request.body
                //2.Guardar en BD
                //3.Responda
                response.status(200).json({
                    'estado':true,
                    'mensaje': 'Exito registrando la reserva',
                    'datos':null
                })
            }catch(error){
                response.status(400).json({
                    'estado':false,
                    'mensaje':'fallamos registrar la reserva'+error,
                    'datos':null
                })
            }
        }
        eliminar(request,response){
            try{
                //1.Recibir datos
                let id = request.params.id
                //2. Eliminar
                //3. Respuesta
                response.status(200).json({
                    'estado':true,
                    'mensaje': 'Exito eliminando la Reserva',
                    'datos':null
                })
            }catch(error){
                response.status(400).json({
                    'estado':false,
                    'mensaje':'fallamos eliminando la Reserva'+error,
                    'datos':null
                })
            }
        }
    }
}