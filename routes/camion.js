var express = require('express');
var router = express.Router();
const db = require('../db');

router.route('/')
.get(function(req, res, next){res.send(getcamiones)})
.post(function(req, res, next){res.send('Res post')})
.put(function(req, res, next){res.send('Res put')})
.delete(function(req, res, next){res.send('Res delete')})

router.route('/:camion')
.get(function(req, res, next){res.send('Res Id camion get')})


module.exports = router;

function getcamiones(){


}