const Joi = require('joi')
module.exports = {
  post(req, res, next) {
    const schema = {
      descripcion: Joi.string(45),
      id: Joi.INTEGER(11),
      nombre: Joi.string(45),
      nombreLargo: Joi.string(45),
      nombreOrden: Joi.string(45),
      trayecto: Joi.string(500),
      tipo: Joi.string(8),
      activo: Joi.INTEGER(1)
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'id':
        case 'nombre':
        case 'nombreLargo':
        case 'nombreOrden':
        case 'trayecto':
        case 'tipo':
        case 'activo':
          res.status(400).send({
            error: 'Introduzca clave de ' + error.details[0].context.key + ' valido'
          });
          break
        default:
          res.status(400).send({
            error: 'Información de registro invalida'
          })
          break
      }
    } else {
      next()
    }
  }
}
