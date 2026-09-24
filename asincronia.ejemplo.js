/**
 JS es un lenguaje de programacion
 En JS existen 2 tipos de funciones : Sincronica / Asincornica
 Las diferenciamos porque en su declaracion llevan el async o no
 En JS las promesas se inventaron para poder manejar porcesos asincronicos.
 Ese estado puede ser :
  - pending : El proceso esta ocurriendo aun.
  - resolved : El proceso finalizo correctamente.
  - rejected : El proceso se interrumpio y finalizo
 */


/*EJEMPLO ASYNC AWAIT -->
async function getUser() {
  try {
    // mediante FETCH podemos emitir consultas HTTP
    const result = await fetch(
      'https://jsonplaceholder.typicode.com/users',
      {
        method: 'GET'
      }
    )
    // Transformamos el contenido de la respuesta en JSON
    const contenido = await result.json()
    console.log('El contenido del fetch es:', contenido)
    console.log(result)
  }
  catch (error) {
    console.log('Hubo un error', error)
  }
}
getUser()
*/