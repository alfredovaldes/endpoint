var express = require('express');
var router = express.Router();
const usercontroller = require('../controllers/usercontroller');
router.route('/')
.get(usercontroller.index)

.post(usercontroller.post)

router.route('/:id')
.get(usercontroller.show)

.put(usercontroller.put)

.delete(usercontroller.delete)

module.exports = router;
/*router.get('/me', function(req, res) {
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    res.status(200).send(decoded);
  });
});
module.exports = router;*/
