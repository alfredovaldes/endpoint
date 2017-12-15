var express = require('express');
var router = express.Router();
const camioncontroller = require('../controllers/camioncontroller')

router.route('/')
.get(camioncontroller.index)

.post(camioncontroller.post)

router.route('/:id')
.get(camioncontroller.show)

.put(camioncontroller.put)

.delete(camioncontroller.delete)

router.route('/:id/chofer')
.get(camioncontroller.showChofer)

router.route('/:id/ruta')
.get(camioncontroller.showRuta)

router.route('/camionchofer')
.post(camioncontroller.postCamionChofer)

router.route('/camionruta')
.post(camioncontroller.postCamionRuta)

module.exports = router;
