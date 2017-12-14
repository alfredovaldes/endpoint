var { parada, rutaParada, parada, camion } = require('../models')

module.exports = {
    async index(req, res) {
        try {
            const paradas = await parada.findAll({})
            res.send(paradas)
        } catch (err) {
            res.status(500).send({ error: 'An error has ocurred' })
        }
    },
    async show(req, res) {
        try {
            const paradaobject = await parada.findById(req.params.id, {})
            res.send(paradaobject)
        } catch (err) {
            res.status(500).send({ error: 'An error has ocurred' })
        }
    },
    async post(req, res) {
        try {
            const paradas = await parada.create({
                id: req.body.id,
                descripcion: req.body.descripcion,
                latitud: req.body.latitud,
                longitud: req.body.longitud
            }, {})
            res.send(paradas)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    async put(req, res) {
        try {
            const paradaobject = await parada.update(req.body, { where: { id: req.params.id } }, {})
            res.send(paradaobject)
        } catch (err) {
            res.status(500).send(err)
        }
    },
    async delete(req, res) {
        try {
            await parada.destroy({ where: { id: req.params.id } })
                .on('success', (done) => {
                    if (done) {
                        res.send(200).send(done)
                    }
                }, {})
            res.send()
        } catch (err) {
            res.status(500).send(err)
        }
    }
}