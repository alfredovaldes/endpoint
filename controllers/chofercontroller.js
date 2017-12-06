var {camion, camionChofer, chofer} = require('../models')
var _ = require('lodash')

module.exports = {
  async index (req, res) {
    try
    {
      const conductores = await chofer.findAll({})
      res.send(conductores)
    }catch (err) {
      console.log(err)
      res.status(500).send({error: 'An error has ocurred'})
    }
  },
  async show (req, res) {
    try
    {
      const conductor = await chofer.findById(req.params.id)
      res.send(conductor)
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  },
  async post (req, res) {
    try
    {
      let obj = {
        nomChofer:req.body.nomChofer
      }
      const conductores = await chofer.create(obj)
      res.send(conductores)
    }catch (err) {
      console.log(err)
      res.status(500).send({error: 'An error has ocurred'})
    }
  },
  async put (req, res) {
    try
    {
      let objUpdate = {
        nomChofer:req.body.nomChofer
      }
      const conductor = await chofer.update(req.body, {where: {id: req.params.id}})
      res.send(conductor)
    }catch (err) {
      console.log(err)
      res.status(500).send({error: 'An error has ocurred'})
    }
  },
  async delete (req, res) {
    try
    {
      await chofer.destroy({where: {id: req.params.id}})
      .on('success', (done)=>{
        if(done){
          res.send(200).send(done)          
        }
      })
      res.send()
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  },
  async showPicture (req, res) {
    try
    {
      const conductor = await chofer.findById(req.params.id, {attributes: ['fotoChofer']})
      res.send(conductor)
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  },
  async putPicture (req, res) {
    try
    {
      const conductor = await chofer.findById(req.params.id)
      if(!conductor){
        return res.status(404).send({
          error: 'Not found'
        })
      }
      const newUUID = await conductor.generateUUID()
      res.send({message:newUUID})
    }catch (err) {
      console.log(err)
      res.status(500).send({error: 'An error has ocurred'})
    }
  },
  async showCamion (req, res) {
    console.log(req.params)
    try
    {
      const transporte = await camionChofer.findAll({
        where: {idChofer: req.params.id},
        include: [{
          model: camion
        }]
      })
      res.send(transporte)
    }catch (err) {
      console.log(err)
      res.status(500).send({error: 'An error has ocurred'})
    }
  }
}