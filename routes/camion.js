var express = require('express');
var router = express.Router();
const camioncontroller = require('../controllers/camioncontroller')

router.route('/')
.get(camioncontroller.index)

.post(camioncontroller.post)

router.route('/:camionId')
.get(camioncontroller.show)

.put(camioncontroller.put)

.delete(camioncontroller.delete)


module.exports = router;

function getcamiones(){


}