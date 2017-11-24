var express = require('express');
var router = express.Router();
const authcontroller = require('../controllers/authcontroller')
const usercontroller = require('../controllers/usercontroller')

router.route('/')
  .get(authcontroller.index, usercontroller.index)

  .post(usercontroller.post)

router.route('/:id')
  .get(authcontroller.index, usercontroller.show)

  .put(authcontroller.index, usercontroller.index)

  .delete(authcontroller.index, usercontroller.delete)

module.exports = router;
