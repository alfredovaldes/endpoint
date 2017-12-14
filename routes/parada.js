var express = require('express');
var router = express.Router();
const paradacontroller = require('../controllers/paradacontroller')

router.route('/')
  .get(paradacontroller.index)

  .post(paradacontroller.post)

router.route('/:id')
  .get(paradacontroller.show)

  .put(paradacontroller.put)

  .delete(paradacontroller.delete)

module.exports = router;
