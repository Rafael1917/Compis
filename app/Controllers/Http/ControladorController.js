'use strict'
const Persona = use('App/Models/Persona')
class ControladorController {
    async InsertarDatos({request,response}){
        const loquesea = new Persona()
        loquesea.nombre = request.input('nombre')
        loquesea.appa = request.input('appa')
        loquesea.apma = request.input('apma')
        loquesea.sexo = request.input('sexo')
        await loquesea.save()
        return response.status(200).send({'Status':'Dato insertado','Datos':loquesea})
    }
}

module.exports = ControladorController
