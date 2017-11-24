var { usuario } = require('../models')
var _ = require('lodash')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config/config')
const usercontroller = require('../controllers/usercontroller')

module.exports = {
    async index(req, res, next) {
        try {
            const regex = /Bearer /g;
            const subst = ``;
            var authToken = req.headers.authorization;
            const token = token.replace(regex, subst);            
            var decoded = jwt.verify(token, config.secret);
            console.log(decoded);
            next();
        } catch (err) {
            res.status(401).send({ error: 'Ningun token, token no valido o expirado' })
        }
    }
}