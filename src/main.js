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
import User from "./models/users.models.js";
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

/*let userId = '6ab281bc46168e38573e69ca'
let workspaceId = '6ab28507d0ae8c82e00e5bee'*/

/*memberRepository.create(
  userId,
  workspaceId,
  'owner')*/

//memberRepository.getAllWorkspaceByUserId('6ab281bc46168e38573e69ca')

/*workspaceRepository.createWorkspace(
  'Club de amigos',
  'Amigos'
)*/


/*
Hacer un sertivdor http con NODE.js
Para esto usaremos una libreria. express.js. Otra opcion con TS podria se nest.js o fastify con JS.
*/
import express from 'express'
//Se crea una app de express
const app = express()
const PORT = 8080


// Traer usuarios de la DB
/*app.get('/api/users',
  async (request, response) => {
    try {
      const userList = await userRepository.getUsers()
      response.send({
        message: 'Get users list',
        ok: true,
        status: 200,
        data: {
          users: userList
        }
      })
    }
    catch (error) {
      response.send({
        status: 'error',
        mensaje: error.message
      })
    }
  }
)*/

// Traer info de un cierto usuario por ID -->
app.get('/api/users/:userId',
  async (request, response) => {
    try {
      //Accedemos a los parametros de la URL -->
      const userId = request.params.userId
      const user = await userRepository.getById(userId)

      if (!user) {
        // Ponemos return para cortar la ejecucion de la funcion
        return response.send({
          message: 'Get user details successfully',
          status: 404,
          ok: false,
          data: {
            user: user
          }
        })
      }
      return response.send({
        message: 'Get user details successfully',
        status: 200,
        ok: true,
        data: {
          user: user
        }
      })

    } catch (error) {
      return response.send({
        status: 'error',
        ok: false,
        error: error.message
      })
    }
  }
)


/*
Si me hacen un GET a la direccion '/api/atatus' activar tal funcion -->
app.get('/api/status',
  (request, response) => {
    response.send('<h1> Request recibida </h1>')
  }
)*/

/*
En el protocolo HTTP hay metodos de consulta:
  GET : obtener recursos del servidor
  POST : enviar recursos al servidor
  PUT : actualizar un recurso del servidor
  DELETE : eliminar un recurso del servidor

Los metodos/verbos son teoricos, es decir teoricamente le GET debe traer recursos pero REALMENTE quien define que hace el GET...DELETE es en ultima instancia el programador
*/
app.listen(
  // Si fuinciono el listen del server entonces se ejecutara esta funcion
  PORT,
  () => {
    console.log(`El servidor se esta ejecutando en http://localhost${PORT}`)
  }
)


