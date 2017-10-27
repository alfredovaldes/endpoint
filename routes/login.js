var express = require('express');
var router = express.Router();
var db = require('../db.js');
var userData;
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login', { title: 'Login page' });
});
router.post('/',function(req,res,cb){
  userData = req.body;
  db.setUser(cb,userData);
  res.send('ok');
}); 
module.exports = router;
