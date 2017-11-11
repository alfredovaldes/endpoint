var express = require('express');
var router = express.Router();
const chofercontroller = require('../controllers/chofercontroller')

router.route('/')
.get(chofercontroller.index)

.post(chofercontroller.post)

router.route('/:id')
.get(chofercontroller.show)

.put(chofercontroller.put)

.delete(chofercontroller.delete)

router.route('/:id/foto')
.get(chofercontroller.showPicture)

module.exports = router;