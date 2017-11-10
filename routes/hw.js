var express = require('express');
var router = express.Router();
var firebase = require('firebase');
const db = require('../db');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA-TEtL45EZDYWF28aNRfWzXXG6-yJaxlM",
    authDomain: "testfire-miag5.firebaseapp.com",
    databaseURL: "https://testfire-miag5.firebaseio.com",
    projectId: "testfire-miag5",
    storageBucket: "testfire-miag5.appspot.com",
    messagingSenderId: "558360565772"
};
firebase.initializeApp(config);

var database = firebase.database();
function writePositionData(truckId, lat, lon) {
    firebase.database().ref('trucks/' + truckId).set({
        lat: lat,
        lon: lon
    });
}
router.route('/:idcamion')
    .post(function (req, res, next) {
        let data = req.body;
        console.log(data)
        writePositionData(req.params.idcamion, data.lat, data.lon);
        res.send(user);
    })

module.exports = router;

function getcamiones() {

}