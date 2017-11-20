const Joi = require('joi')
module.exports = {
  post(req, res, next) {
    const schema = {
      nomChofer: Joi.string(),
      fotoChofer: Joi.any()
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'noLicencia':
          res.status(400).send({
            error: 'Introduzca un numero de licencia valido'
          })
          break
        case 'vigenciaLicencia':
          res.status(400).send({
            error: 'Introduzca una fecha de vencimiento de licencia valido'
          })
          break
        case 'telChofer':
          res.status(400).send({
            error: 'Introduzca un numero de telefono valido'
          })
          break
        case 'celChofer':
          res.status(400).send({
            error: 'Introduzca un numero de celular valido'
          })
          break
        case 'emailChofer':
          res.status(400).send({
            error: 'Introduzca un correo electronico valido'
          })
          break
        case 'fechaNacimiento':
          res.status(400).send({
            error: 'Introduzca una fecha valida valido'
          })
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
