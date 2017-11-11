var express = require('express');
var router = express.Router();
var {user} = require('../models')

/* User Home. */
router.get('/', async function (req, res, next) {
  var resultado = 0;
  try{
    const activeUsers = await user.findAll({})
    const data = JSON.stringify(activeUsers)
    res.render('usersQuery', {
      data: data
    })
  }catch(err){
    res.status(500).send({error: 'An error has ocurred'})
  }
});

/* Other user*/
/*
router.get('/:id', function(req, res, next){
  res.send('Res get')
});
*/
module.exports = router;
