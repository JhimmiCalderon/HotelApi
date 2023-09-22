import { request, response } from "express"

export class ControladorReservas{
    constructor(){
        buscarTodas(request,response){}
        buscarPorId(request,response){}
        modificarReserva(request,response){}
        registrar(request,response){}
        eliminar(request,response){}
    }
}