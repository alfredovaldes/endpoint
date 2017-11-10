var {camiones} = require('../models')

module.exports = {
  async index (req, res) {
    try
    {
      const transportes = await camiones.findAll({})
      res.send(transportes)
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  },
  async show (req, res) {
    try
    {
      const transporte = await camiones.findById(req.params.camionId)
      res.send(transporte)
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  },async post (req, res) {
    try
    {
      console.log(req.body)
      const transportes = await camiones.create({
        codCamion:req.body.codCamion,
        descripcion:req.body.descripcion,
        rating_codRating:req.body.rating_codRating
      })
      res.send(transportes)
    }catch (err) {
      res.status(500).send(err)
    }
  },async put (req, res) {
    try
    {
      const transporte = await camiones.update(req.body, {where: {codCamion: req.params.camionId}})
      res.send(transporte)
    }catch (err) {
      res.status(500).send(err)
    }
  },async delete (req, res) {
    try
    {
      await camiones.destroy({where: {codCamion: req.params.camionId}})
      .on('success', (done)=>{
        if(done){
          res.send(200).send(done)          
        }
      })
      res.send()
    }catch (err) {
      res.status(500).send(err)
    }
  }
}