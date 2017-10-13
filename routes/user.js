var express = require('express');
var router = express.Router();
let db = require('../db');

/* User Home. */
router.get('/', function(req, res, next) {
  db.getEnt(function(err, result){
    if(err) return res.send(500)
    return res.send(200, result)
  })
  //res.send('respond with a resource');
});

/* Other user*/
router.get('/:id', function(req, res, next){
  res.send('Res get')
});

module.exports = router;
