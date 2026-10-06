/* /* import connectMongoDB from "./config/mongo.config.js";

// Importar clases
import WorkSpace from "./models/workspace.model.js";
import User from "./models/users.models.js";
import userRepository from "./repositories/user.repository.js";
import memberRepository from "./repositories/member.repository.js";
import workspaceRepository from "./repositories/workspace.repository.js";

connectMongoDB()

/*
Hacer un sertivdor http con NODE.js
Para esto usaremos una libreria. express.js. Otra opcion con TS podria se nest.js o fastify con JS.
*/

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
/* import express from 'express'
import ServerError from "./utils/error.util.js";
//Se crea una app de express
const app = express()
//Configuramos nuestra API para que nuestro body pueda ser tipo de dato JSON
// Esto es un middleware
// Cada vez que llegue una consulta el middleware revisara si el request.header['Content-Type'] es 'application/json' y transformara el json recibido y lo guarda en request.body
app.use(express.json())
const PORT = 8080 */


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
/*app.get('/api/users/:userId',
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
)*/

/*
Para enviar en una request HTTP info a una API usamos el body

Las consultas tipo GET NO TIENEN body
El body puede ser de distintos tipos de datos :
Hoy vamos a usar JSON
*/

/* app.post(
  '/api/auth/register',
  async (req, res) => {

    console.log('[REGISTER]', req.body)

    const { username, email, password } = req.body

    if (!username || !email || !password) {
      throw new ServerError("Email, password snd username is requires", 400)
    }

    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
      throw new ServerError('Email is incorrect', 400)
    }
    // Validar si el email ya esta registrado -->
    const userAlreadyExist = await userRepository.getByEmail(email)
    if (userAlreadyExist) {
      throw new ServerError('Email is already used', 400)
    }

    await userRepository.create(username, email, password)

    return res.status(201).json({
      ok: true,
      message: 'User registred succesfully!'
    })
  }
) */

/*
Flujo actual :
  Llega request -> pasa por el middleware de express.json (hace chequeo de si el body es json) -> luego llega al endpoint (ahi mismo se manjea el error)

Flujo ideal : pasa por el middleware de express.json (hace el chequeo de si el body es json) => llega al endpoint => middleware de errores (chequea si el error es controlable o no y responde)
*/


// Middleware de errores (oficina de errores)
// Si bien llamamos a next en este caso NO nos interasa uasrlo porque no hau oficina siguiente a la de errores
/* app.use(
  (error, req, res, next) => {
    if (error.status) {
      return response.send(
        {
          ok: false,
          status: error.status,
          message: error.message
        }
      )
    }

    //Es un error inesperado
    else {
      console.error('[Server Error]:', error.message)
      //Error generico
      return res.status(error.status || 500).json(
        {
          ok: false,
          message: 'Internal server error'
        }
      )
    }
  }
) */
/*
app.listen(
  // Si fuinciono el listen del server entonces se ejecutara esta funcion
  PORT,
  () => {
    console.log(`El servidor se esta ejecutando en http://localhost${PORT}`)
  }
)
 */

import connectMongoDB from "./config/mongo.config.js";
import member_repository from "./repositories/member.repository.js";
import user_repository from "./repositories/user.repository.js";
import workspace_repository from "./repositories/workspace.repository.js";

connectMongoDB()


import express from 'express'
import ServerError from "./utils/error.util.js";
import errorHandlerMiddleware from "./middlewares/error.middleware.js";
import { getUserById, getUsers } from "./controllers/user.controller.js";
import { register } from "./controllers/auth.controller.js";

const PORT = 8080

const app = express()

//Configuramos nuesta API para que body pueda ser tipo de dato JSON
//Esto es un middleware
//Cada vez que llegue una consulta el middleware revisara si el request.header['Content-Type'] es 'application/json' y transformara el JSON recibido y lo guardara en request.body
app.use(express.json())


app.get(
  '/api/users',
  getUsers
)


app.get(
  '/api/users/:user_id',
  getUserById
)


app.post(
  '/api/auth/register',
  register
)

/*
Flujo actual:
LLega request => pasa por el middleware de express.json (hace el checkeo de si el body es JSON) => llega al endpoint (Ahi mismo se maneja el error)

Flujo ideal:
LLega request
=>
pasa por el middleware de express.json (hace el checkeo de si el body es JSON)
=>
llega al endpoint
=> (si hay error)
Middleware de errores (checkea si el error es controlable o no y responde)
*/

app.get(
  '/api/status',
  (request, response) => {

    response.send(['hola, les traigo paz'])
  }
)


app.use(
  errorHandlerMiddleware
)


app.listen(
  PORT,
  () => {
    console.log(
      `El servidor se esta escuchando correctamente en http://localhost:${PORT}`
    )
  }
)