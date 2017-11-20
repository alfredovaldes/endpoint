var express = require('express');
var router = express.Router();
const usercontroller = require('../controllers/usercontroller')

router.route('/')
  .get(usercontroller.index)

  .post(usercontroller.post)

router.route('/:id')
  .get(usercontroller.show)

  .put(usercontroller.put)

  .delete(usercontroller.delete)

module.exports = router;
