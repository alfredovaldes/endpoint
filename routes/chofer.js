var express = require('express');
var router = express.Router();
const chofercontroller = require('../controllers/chofercontroller')

router.route('/')
.get(chofercontroller.index)

.post(chofercontroller.post)

router.route('/:choferId')
.get(chofercontroller.show)

.put(chofercontroller.put)

.delete(chofercontroller.delete)

router.route('/:choferId/foto')
.get(chofercontroller.showPicture)

module.exports = router;