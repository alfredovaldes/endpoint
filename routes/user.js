var express = require('express');
var router = express.Router();
var db = require('../db.js')

/* User Home. */
router.get('/', function (req, res, next) {
  var resultado = 0;
  var con = db.conexion;
  con.query("SELECT * FROM user", function (err, result, fields) {
    if (err) throw err;
    var data = JSON.stringify(result);  // <====    
    res.render('usersQuery', {
      data: data
    });
  });
});

/* Other user*/
/*
router.get('/:id', function(req, res, next){
  res.send('Res get')
});
*/
module.exports = router;
