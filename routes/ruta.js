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

module.exports = router;
