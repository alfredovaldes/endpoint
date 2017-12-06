var {camion, camionChofer, chofer, rutaCamion, ruta} = require('../models')

module.exports = {
  async index (req, res) {
    try
    {
      const transportes = await camion.findAll({})
      res.send(transportes)
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  },
  async show (req, res) {
    try
    {
      const transporte = await camion.findById(req.params.id)
      res.send(transporte)
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  },async post (req, res) {
    try
    {
      console.log(req.body)
      const transportes = await camion.create({
        descripcion:req.body.descripcion,
        placas:req.body.placas
      })
      res.send(transportes)
    }catch (err) {
      res.status(500).send(err)
    }
  },async put (req, res) {
    try
    {
      const transporte = await camion.update(req.body, {where: {id: req.params.id}})
      res.send(transporte)
    }catch (err) {
      res.status(500).send(err)
    }
  },async delete (req, res) {
    try
    {
      await camion.destroy({where: {id: req.params.id}})
      .on('success', (done)=>{
        if(done){
          res.send(200).send(done)          
        }
      })
      res.send()
    }catch (err) {
      res.status(500).send(err)
    }
  },
  async showChofer (req, res) {
    try
    {
      const transporte = await camionChofer.findAll({
        where: {idCamion: req.params.id},
        include: [{
          model: chofer
        }]
      })
      res.send(transporte)
    }catch (err) {
      console.log(err)
      res.status(500).send({error: 'An error has ocurred'})
    }
  },
  async showRuta (req, res) {
    try
    {
      const transporte = await rutaCamion.findAll({
        where: {idCamion: req.params.id},
        include: [{
          model: ruta
        }]
      })
      res.send(transporte)
    }catch (err) {
      console.log(err)
      res.status(500).send({error: 'An error has ocurred'})
    }
  }
}