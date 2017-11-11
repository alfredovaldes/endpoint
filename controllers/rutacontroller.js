var {ruta} = require('../models')

module.exports = {
  async index (req, res) {
    try
    {
      const rutas = await ruta.findAll({})
      res.send(rutas)
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  },
  async show (req, res) {
    try
    {
      const rutaobject = await ruta.findById(req.params.id)
      res.send(rutaobject)
    }catch (err) {
      res.status(500).send({error: 'An error has ocurred'})
    }
  },async post (req, res) {
    try
    {
      console.log(req.body)
      const rutas = await ruta.create({
        codRuta:req.body.codRuta,
        nombre:req.body.nombre,
        nombreLargo:req.body.nombreLargo,
        nombreOrden:req.body.nombreOrden,
        trayecto:req.body.trayecto,
        tipo:req.body.tipo,
        activo:req.body.activo
      })
      res.send(rutas)
    }catch (err) {
      res.status(500).send(err)
    }
  },async put (req, res) {
    try
    {
      const rutaobject = await ruta.update(req.body, {where: {codRuta: req.params.id}})
      res.send(rutaobject)
    }catch (err) {
      res.status(500).send(err)
    }
  },async delete (req, res) {
    try
    {
      await ruta.destroy({where: {codRuta: req.params.id}})
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