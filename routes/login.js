var express = require('express');
var router = express.Router();
const authcontroller = require('../controllers/authcontroller')
const usercontroller = require('../controllers/usercontroller')

router.route('/')
  .get(usercontroller.index)

  .post(usercontroller.post)

router.route('/:id')
  .get(usercontroller.show)

  .put(usercontroller.index)

  .delete(usercontroller.delete)

module.exports = router;
