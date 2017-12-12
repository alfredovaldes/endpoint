var express = require('express');
var router = express.Router();
const rutacontroller = require('../controllers/rutacontroller')

router.route('/')
  .get(rutacontroller.index)

  .post(rutacontroller.post)

router.route('/:id')
  .get(rutacontroller.show)

  .put(rutacontroller.put)

  .delete(rutacontroller.delete)

router.route('/:id/paradas')
  .get(rutacontroller.showParadas)

  router.route('/:id/camiones')
  .get(rutacontroller.showCamiones)
  
module.exports = router;
