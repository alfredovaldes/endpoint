var express = require('express');
var router = express.Router();
const posicioncontroller = require('../controllers/posicioncontroller')

router.route('/:id')
  .get(posicioncontroller.show)

module.exports = router;
