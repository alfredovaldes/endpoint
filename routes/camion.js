var express = require('express');
var router = express.Router();
const db = require('../db');

router.route('/')
.get(function(req, res, next){
  db.getCamion(null, (err, result)=>{
    if(err){res.sendStatus(500)}
    res.send(result)
  })
})

.post(function(req, res, next){
  res.send('Res post')
})

.put(function(req, res, next){
  res.send('Res put')
})

.delete(function(req, res, next){
  res.send('Res delete')
})

router.route('/:camion')
.get(function(req, res, next){
  db.getCamion(req.params.camion, (err, result)=>{
    if(err){res.sendStatus(500)}
    res.send(result)
  })
})


module.exports = router;

function getcamiones(){


}