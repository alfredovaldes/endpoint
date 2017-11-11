var express = require('express');
var router = express.Router();

/* Paradas existentes en ruta especificada */
router.get('/:ruta', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Rutas que pasan por una parada especifica */
router.get('/rutas/:parada', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
