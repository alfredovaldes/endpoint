var express = require('express');
var router = express.Router();
const rutacontroller = require('../controllers/rutacontroller')

router.route('/')
  .get(rutacontroller.index)

  .post(rutacontroller.post)

router.route('/:id')
  .get(rutacontroller.show)

  .put(rutacontroller.put)

  .delete(rutacontroller.delete)

<<<<<<< HEAD
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

=======
>>>>>>> ea4dcff7b8fc5659f6f530ce876478f7470c2620
module.exports = router;
