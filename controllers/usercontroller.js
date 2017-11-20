var {usuario} = require('../models')
var _ = require('lodash')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config/config')

module.exports = {
  async index (req, res) {
    try
    {
      const usuarios = await usuario.findAll({})
      res.send(usuarios)
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  },
  async show (req, res) {
    try
    {
      const user = await usuario.findById(req.params.id)
      res.send(user)
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  },async post (req, res) {
    try
    {
      var hashedPassword = bcrypt.hashSync(req.params.password, 8); 
      let obj = {
        nombre:req.params.nombre,
        email: req.params.email,
        password: hashedPassword
      }
      var token = jwt.sign({nombre: obj.nombre}, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      const usuarios = await usuario.create(obj);
      res.status(200).send({ auth: true, token: token });      
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  },async put (req, res) {
    try
    {
      let objUpdate = {
        nombre:req.params.nombre,
        email: req.params.email,
        password: req.params.password
      }
      const user = await usuario.update(req.params, {where: {id: req.params.id}})
      res.send(user)
    }catch (err) {
      console.log(err)
      res.status(500).send({error: 'An error has ocurred'})
    }
  },async delete (req, res) {
    try
    {
      await usuario.destroy({where: {id: req.params.id}})
      .on('success', (done)=>{
        if(done){
          res.send(200).send(done)          
        }
      })
      res.send()
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  }
}