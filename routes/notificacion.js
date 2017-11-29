var express = require('express');
var router = express.Router();
const notificacioncontroller = require('../controllers/notificacioncontroller')

router.route('/')
.post(notificacioncontroller.post)

module.exports = router;
