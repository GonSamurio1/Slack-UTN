/*
Reglas para que tu servidor no se sature:
  -Siempre que podamos, usar filtros del lado de la DB (son MUUCHO mas eficient que in for of)
*/

/*import { sumar, dividir, PI } from "./math.js"
console.log(PI)
console.log(sumar(29, 2))
console.log(dividir(10, 2))*/

/*import { v4 as uuid } from 'uuid'

let idRandom = uuid()
console.log(idRandom)*/

import connectMongoDB from "./config/mongo.config.js";

// Importar clases
import WorkSpace from "./models/workspace.model.js";
//import User from "./models/users.models.js";
import userRepository from "./repositories/user.repository.js";
import memberRepository from "./repositories/member.repository.js";
import workspaceRepository from "./repositories/workspace.repository.js";

connectMongoDB()

/*Mongoose trabaja con sistemas, nos permite deifnir que tipo de dato/estructura guardara un documento en una coleccion */

// USERS -->
//userRepository.createUser('Juan', 'juan@gmail.com', 'juan123')
// WORKSPACE -->
// ASINCORNIA CON NUESRTA DB -->
// MUESTRA USUARIOS EN LA DB -->
// FILTRA USUARIOS POR SU FECHA DE CRACION (se puede poner un rango de x fecha hasta x fecha) -->
// ELIMINAR UN USUARIO POR ID -->
// ACTUALIZAR USER POR ID -->
// MUESTRA TODOS LOS USUARIOS QUE CUMPLAN CON EL TERMINO DADO -->
// FILTRAR POR ID -->
// DEVUELVE UN OBJETO O NULL -->

let userId = '6ab281bc46168e38573e69ca'
let workspaceId = '6ab28507d0ae8c82e00e5bee'
/*memberRepository.create(
  userId,
  workspaceId,
  'owner')*/

//memberRepository.getAllWorkspaceByUserId('6ab281bc46168e38573e69ca')

/*workspaceRepository.createWorkspace(
  'Club de amigos',
  'Amigos'
)*/




