var express = require('express');
var router = express.Router();
const db = require('../db');

router.route('/')
.get(function(req, res, next){
    getChofer(function(err,result){
        if(err) return res.send(500)
        return res.send(200, {result})
    })
})
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

function getChofer(cb){
    db.getChofer(function(err, result){
        if(err) return cb(err,null);
        return cb(null, result);
    })
}