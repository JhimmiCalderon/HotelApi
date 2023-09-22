import { Api } from './Api.js'
import { rutasAPI } from './routes/rutasHoteles.js'

let servidor = new Api()//creando objeto de la clase Api

//levantamos el servidor
servidor.levantarServidor()