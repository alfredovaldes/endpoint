var { ruta, rutaParada, parada, rutaCamion, camion } = require('../models')
var morgan = require('morgan')
var fs = require('fs')
var path = require('path')
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

module.exports = {
  async index(req, res) {
    try {
      var query = "";
      const rutas = await ruta.findAll({})

      res.send(rutas)
    } catch (err) {
      res.status(500).send({ error: 'An error has ocurred' })
    }
  },
  async show(req, res) {
    try {
      const rutaobject = await ruta.findById(req.params.id, {})
      res.send(rutaobject)
    } catch (err) {
      res.status(500).send({ error: 'An error has ocurred' })
    }
  },
  async post(req, res) {
    try {
      const rutas = await ruta.create({
        id: req.body.id,
        nombre: req.body.nombre,
        nombreLargo: req.body.nombreLargo,
        nombreOrden: req.body.nombreOrden,
        trayecto: req.body.trayecto,
        tipo: "ruta",
        activo: 1
      }, {})
      res.send(rutas)
    } catch (err) {
      res.status(500).send(err)
    }
  },
  async put(req, res) {
    try {
      const rutaobject = await ruta.update(req.body, { where: { id: req.params.id } })
      res.send(rutaobject)
    } catch (err) {
      res.status(500).send(err)
    }
  },
  async delete(req, res) {
    try
    {
      await ruta.destroy({where: {id: req.params.id}})
      res.status(200).send(ruta)
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  },
  async showParadas(req, res) {
    try {
      const paradas = await rutaParada.findAll({
        where: { idRuta: req.params.id },
        include: [{
          model: parada
        }]
      }, {})
      res.send(paradas)
    } catch (err) {
      console.log(err)
      res.status(500).send({ error: 'An error has ocurred' })
    }
  },
  async showCamiones(req, res) {
    try {
      const camiones = await rutaCamion.findAll({
        where: { idRuta: req.params.id },
        include: [{
          model: camion
        }]
      }, {})
      res.send(camiones)
    } catch (err) {
      console.log(err)
      res.status(500).send({ error: 'An error has ocurred' })
    }
  }
}