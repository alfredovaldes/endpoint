const Joi = require('joi')
module.exports = {
    post(req, res, next) {
        const schema = {
            id: Joi.integer(11),
            nombre: Joi.string(45),
            email: Joi.string().email(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
            uid: Joi.alphanum().required()
        }

        const { error } = Joi.validate(req.body, schema)

        if (error) {
            switch (error.details[0].context.key) {
                case 'id':
                case 'nombre':
                case 'email':
                case 'password':
                case 'uid':
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
