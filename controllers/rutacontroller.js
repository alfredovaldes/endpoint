var { ruta, rutaParada, parada, rutaCamion, camion } = require('../models')
var morgan = require('morgan')
var fs = require('fs')
var path = require('path')
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

module.exports = {
  async index(req, res) {
    try {
      var query = "";
      const rutas = await ruta.findAll({
        logging: function (sql) {
          (fs.appendFileSync(
            'message.txt',
            "\n IP: " + req.ip + "\n Time: " + req._startTime + "\n query: " + sql)
          )
        }
      }
      )

      res.send(rutas)
    } catch (err) {
      res.status(500).send({ error: 'An error has ocurred' })
    }
  },
  async show(req, res) {
    try {
      const rutaobject = await ruta.findById(req.params.id, {
        logging: function (sql) {
          (fs.appendFileSync(
            'message.txt',
            "\n IP: " + req.ip + "\n Time: " + req._startTime + "\n query: " + sql)
          )
        }
      }).then(function (rutaobject) { console.log(rutaobject); })
      res.send(rutaobject)
    } catch (err) {
      res.status(500).send({ error: 'An error has ocurred' })
    }
  },
  async post(req, res) {
    try {
      console.log(req.body)
      const rutas = await ruta.create({
        codRuta: req.body.codRuta,
        nombre: req.body.nombre,
        nombreLargo: req.body.nombreLargo,
        nombreOrden: req.body.nombreOrden,
        trayecto: req.body.trayecto,
        tipo: req.body.tipo,
        activo: req.body.activo
      }, {
          logging: function (sql) {
            (fs.appendFileSync(
              'message.txt',
              "\n IP: " + req.ip + "\n Time: " + req._startTime + "\n query: " + sql)
            )
          }
        })

      res.send(rutas)
    } catch (err) {
      res.status(500).send(err)
    }
  },
  async put(req, res) {
    try {
      const rutaobject = await ruta.update(req.body, { where: { codRuta: req.params.id } }, {
        logging: function (sql) {
          (fs.appendFileSync(
            'message.txt',
            "\n IP: " + req.ip + "\n Time: " + req._startTime + "\n query: " + sql)
          )
        }
      })
      res.send(rutaobject)
    } catch (err) {
      res.status(500).send(err)
    }
  },
  async delete(req, res) {
    try {
      await ruta.destroy({ where: { codRuta: req.params.id } })
        .on('success', (done) => {
          if (done) {
            res.send(200).send(done)
          }
        }, {
          logging: function (sql) {
            (fs.appendFileSync(
              'message.txt',
              "\n IP: " + req.ip + "\n Time: " + req._startTime + "\n query: " + sql)
            )
          }
        })
      res.send()
    } catch (err) {
      res.status(500).send(err)
    }
  },
  async showParadas(req, res) {
    try {
      const paradas = await rutaParada.findAll({
        where: { idRuta: req.params.id },
        include: [{
          model: parada
        }]
      }, {
          logging: function (sql) {
            (fs.appendFileSync(
              'message.txt',
              "\n IP: " + req.ip + "\n Time: " + req._startTime + "\n query: " + sql)
            )
          }
        })
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
      }, {
          logging: function (sql) {
            (fs.appendFileSync(
              'message.txt',
              "\n IP: " + req.ip + "\n Time: " + req._startTime + "\n query: " + sql)
            )
          }
        })
      res.send(camiones)
    } catch (err) {
      console.log(err)
      res.status(500).send({ error: 'An error has ocurred' })
    }
  }
}