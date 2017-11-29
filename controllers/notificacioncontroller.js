var {notificacion} = require('../models')

module.exports = {
  async post (req, res) {
    try
    {
      const transportes = await notificacion.create({
        mensaje:req.body.mensaje
      })
      res.send(transportes)
    }catch (err) {
      res.status(500).send(err)
    }
  }
}