var express = require('express');
var router = express.Router();
const db = require('../db');

router.route('/:idcamion')
.post(function(req, res, next){
    let infoupdate = req.body;
    console.log(infoupdate)
    res.send('Res Id camion get')
})

module.exports = router;

function getcamiones(){


}