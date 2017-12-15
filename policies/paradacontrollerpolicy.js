const Joi = require('joi')
module.exports = {
    post(req, res, next) {
        const schema = {
            id: Joi.INTEGER(11),
            descripcion: Joi.STRING(45),
            latitud: Joi.number(),
            longitud: Joi.number()
        }

        const { error } = Joi.validate(req.body, schema)

        if (error) {
            switch (error.details[0].context.key) {
                case 'id':
                case 'descripcion':
                case 'longitud':
                case 'latitud':
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
