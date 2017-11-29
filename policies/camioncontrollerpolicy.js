const Joi = require('joi')
module.exports = {
  post(req, res, next) {
    const schema = {
      descripcion: Joi.string(45),
      placas: Joi.string(10)
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
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
