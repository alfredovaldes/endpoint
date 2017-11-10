var {chofer} = require('../models')

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
      const conductor = await chofer.findById(req.params.choferId)
      res.send(conductor)
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  },async post (req, res) {
    try
    {
      console.log(req.body)
      const conductores = await chofer.create({
        codChofer:req.body.codChofer,
        noLicencia:req.body.noLicencia,
        vigenciaLicencia:req.body.vigenciaLicencia,
        nomChofer:req.body.nomChofer,
        dirChofer:req.body.dirChofer,
        telChofer:req.body.telChofer,
        celChofer:req.body.celChofer,
        emailChofer:req.body.emailChofer,
        fechaNacimiento:req.body.fechaNacimiento,
        fechaAlta:req.body.fechaAlta,
        fotoChofer:req.body.fotoChofer,
        calificacionChofer:req.body.calificacionChofer,
        rating_codRating:req.body.rating_codRating
      })
      res.send(conductores)
    }catch (err) {
      res.status(500).send(err)
    }
  },async put (req, res) {
    try
    {
      const conductor = await chofer.update(req.body, {where: {codChofer: req.params.choferId}})
      res.send(conductor)
    }catch (err) {
      res.status(500).send(err)
    }
  },async delete (req, res) {
    try
    {
      await chofer.destroy({where: {codChofer: req.params.choferId}})
      .on('success', (done)=>{
        if(done){
          res.send(200).send(done)          
        }
      })
      res.send()
    }catch (err) {
      res.status(500).send(err)
    }
  },async showPicture (req, res) {
    try
    {
      const conductor = await chofer.findById(req.params.choferId, {attributes: ['fotoChofer']})
      res.send(conductor)
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  }
}