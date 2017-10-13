const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login page' });
});
router.post('/login', function(req, res, next) {
    res.send({ message: 'Login Successful' });
});
router.get('/logout', function(req, res, next) {
    res.send({ message: 'Logout Successful' });
});
router.post('/resetpass', function(req, res, next) {
    res.send({ message: 'An email has been sent to your account' });
});
  
module.exports = router;