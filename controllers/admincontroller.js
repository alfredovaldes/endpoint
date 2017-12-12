var { usuario } = require('../models')
var _ = require('lodash')
var jwt = require('jsonwebtoken');
var config = require('../config/config')

module.exports = {
  async index(req, res) {
    try {
      //console.log(req.user);              
      //console.log("made it here")
      const usuarios = await usuario.findAll({}).then(function(usuarios){console.log(usuarios);})
      res.send(usuarios)
    } catch (err) {
      res.status(500).send({ error: 'An error has ocurred' })
    }
  },
  async show(req, res) {
    try {
      const user = await usuario.findById(req.body.id)
      res.send(user)
    } catch (err) {
      res.status(500).send({ error: 'An error has ocurred' })
    }
  }, async post(req, res) {
    try {
        let obj = {
          nombre: req.body.nombre,
          email: req.body.email,
          uid: req.body.uid
        }
      var token = jwt.sign({ email: obj.email, admin: 1 }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      const usuarios = await usuario.create(obj);
      res.status(200).send({ auth: true, token: token });
    } catch (err) {
      res.status(500).send(req.body)
    }
  }, async get(req, res) {
    try {
      res.download("message.txt")            
    } catch (err) {
      console.log(err)
      res.status(500).send({ error: 'An error has ocurred' })
    }
  }, async delete(req, res) {
    try {
      await usuario.destroy({ where: { id: req.body.id } })
        .on('success', (done) => {
          if (done) {
            res.send(200).send(done)
          }
        })
      res.send()
    } catch (err) {
      res.status(500).send({ error: 'An error has ocurred' })
    }
  }
}