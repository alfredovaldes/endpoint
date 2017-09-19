var express = require('express');
var router = express.Router();

router.route('/')
.post(function(req, res, next){res.send('Res post')})
.put(function(req, res, next){res.send('Res put')})
.delete(function(req, res, next){res.send('Res delete')})

router.route('/:chofer')
.get(function(req, res, next){res.send('Res get')})

router.route('/:chofer/foto')
.get(function(req, res, next){res.send('Res get')})
.post(function(req, res, next){res.send('Res post')})
.put(function(req, res, next){res.send('Res put')})



module.exports = router;
