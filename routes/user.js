var express = require('express');
var router = express.Router();

/* User Home. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Other user*/
router.get('/:id', function(req, res, next){
  res.send('Res get')
});

module.exports = router;
