var express = require('express');
var router = express.Router();


router.route('/:id')
.get(function(req, res, next){res.send('Res get')})
.put(function(req, res, next){res.send('Res put')})

module.exports = router;
