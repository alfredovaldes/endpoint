var express = require('express');
var router = express.Router();
var db = require('../db.js')

router.get('/', function (req, res, next) {
  var resultado = 0;
  var con = db.conexion;
  con.query("SELECT * FROM ruta", function (err, result, fields) {
    if (err) throw err;
    var data = JSON.stringify(result);  // <====    
    res.send(data);
  });
});

router.get('/:id', function (req, res, next) {
  var resultado = 0;
  var con = db.conexion;
  console.log(req.params.id);
  con.query("SELECT * FROM ruta WHERE codRuta=" + req.params.id + ";", function (err, result, fields) {
    if (err) throw err;
    var data = JSON.stringify(result);  // <====    
    res.send(data);
  });

});

module.exports = router;
