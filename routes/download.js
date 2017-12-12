var express = require('express');
var router = express.Router();
const authcontroller = require('../controllers/authcontroller')
const usercontroller = require('../controllers/admincontroller')

router.route('/')
  .get(usercontroller.get)

module.exports = router;
