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
      res.status(200).send(chofer)
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  },
  async showPicture (req, res) {
    try
    {
      const conductor = await chofer.findById(req.params.id, {attributes: ['fotoChofer']})
      if(!conductor.fotoChofer){
        return res.status(404).send({message: 'Not Found'})
      }
      var options = {
        root: __dirname + '/../uploads/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
      };
      var fileName = conductor.fotoChofer
      return res.sendFile(fileName, options, function (err) {
        if (err) {
          return res.status(404).send({message: 'Not Found'})
        } else {
          console.log('Sent:', fileName);
        }
      });
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  },
  async postPicture (req, res) {
    console.log(req.file)
    try
    {
      const conductor = await chofer.findById(req.params.id)
      if(!conductor){
        return res.status(404).send({
          error: 'Not found'
        })
      }
      conductor.updateAttributes({
        fotoChofer:req.file.filename
      })
      res.send({message:"que onda"})
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