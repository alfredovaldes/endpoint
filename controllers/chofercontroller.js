var {chofer} = require('../models')
var _ = require('lodash')

module.exports = {
  async index (req, res) {
    try
    {
      const conductores = await chofer.findAll({})
      res.send(conductores)
    }catch (err) {
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
  },async post (req, res) {
    try
    {
      let obj = {
        noLicencia:req.body.noLicencia,
        vigenciaLicencia: req.body.vigenciaLicencia,
        nomChofer:req.body.nomChofer,
        dirChofer:req.body.dirChofer,
        telChofer:req.body.telChofer,
        celChofer:req.body.celChofer,
        emailChofer:req.body.emailChofer,
        fechaNacimiento: req.body.fechaNacimiento,
        fechaAlta: new Date(),
        fotoChofer:req.body.fotoChofer
      }
      const conductores = await chofer.create(obj)
      res.send(conductores)
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  },async put (req, res) {
    try
    {
      let objUpdate = {
        noLicencia:req.body.noLicencia,
        vigenciaLicencia: req.body.vigenciaLicencia,
        nomChofer:req.body.nomChofer,
        dirChofer:req.body.dirChofer,
        telChofer:req.body.telChofer,
        celChofer:req.body.celChofer,
        emailChofer:req.body.emailChofer,
        fechaNacimiento: req.body.fechaNacimiento,
        fotoChofer:req.body.fotoChofer
      }
      const conductor = await chofer.update(req.body, {where: {id: req.params.id}})
      res.send(conductor)
    }catch (err) {
      console.log(err)
      res.status(500).send({error: 'An error has ocurred'})
    }
  },async delete (req, res) {
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
  },async showPicture (req, res) {
    try
    {
      const conductor = await chofer.findById(req.params.id, {attributes: ['fotoChofer']})
      res.send(conductor)
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  }
}