var express = require('express');
var router = express.Router();


router.route('/chofer/:id')
.get(function(req, res, next){res.send('Res get')})
.post(function(req, res, next){res.send('Res post')})
.put(function(req, res, next){res.send('Res put')})
.delete(function(req, res, next){res.send('Res delete')})

router.route('/camion/:id')
.get(function(req, res, next){res.send('Res get')})
.post(function(req, res, next){res.send('Res post')})
.put(function(req, res, next){res.send('Res put')})
.delete(function(req, res, next){res.send('Res delete')})

module.exports = router;
