var { usuario } = require('../models')
var _ = require('lodash')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config/config')
const usercontroller = require('../controllers/usercontroller')
var request = require('request');
var promise = require('promise');
var app_id = "testfire-miag5"
var firebase_apikey = "AIzaSyA-TEtL45EZDYWF28aNRfWzXXG6-yJaxlM"
var refreshToken = "";
var accessToken;

module.exports = {
    async index(req, res, next) {
        try {
            var data = {
                email: req.body.email,
                password: req.body.password,
                returnSecureToken: true
            };
            request({
                url: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" + firebase_apikey,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                json: true,   // <--Very important!!!
                body: data
            }, function (error, response, body) {
                var accessToken = "";
                refreshToken = response.body.refreshToken;
                var data = {
                    grant_type: "refresh_token",
                    refresh_token: refreshToken
                };
                request({
                    url: "https://securetoken.googleapis.com/v1/token?key=" + firebase_apikey,
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    json: true,   // <--Very important!!!
                    body: data
                }, function (error, response, body) {
                    res.send(response.body.access_token);
                });
            });        
        } catch (err) {
            res.status(401).send({ error: 'Ningun token, token no valido o expirado' })
        }
    }
}

function signIn(email, password) {
    
}