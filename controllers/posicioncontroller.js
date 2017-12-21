var request = require('request');
var rp = require('request-promise');
var { sequelize, camion, camionChofer, chofer, rutaCamion, ruta } = require('../models')
async function getCamionId() {
    return null;
}
module.exports = {
    async show(req, res) {
        try {
            var pos;
            rp('https://testfire-miag5.firebaseio.com/camiones/' + req.params.id + '.json')
                .then(await function (body) {
                    var cuerpo = JSON.parse(body)
                    cuerpo = Object.values(cuerpo);
                    res.send(cuerpo[cuerpo.length - 1]);
                });
        } catch (err) {
            res.status(500).send(err)
        }
    },
    async get(req, res) {
        try {
            var pos;
            var camionData;
            var body;
            rp('https://testfire-miag5.firebaseio.com/camiones.json')
                .then(await function (body) {
                    getCamionId().then(async function (result) {
                        const transportes = await camion.findAll({ raw: true }).then(function (result) {
                            camionData = result;
                            cuerpo = JSON.parse(body);
                            var respuesta = {};
                            var cuerpo = JSON.parse(body);
                            cuerpo = Object.values(cuerpo);

                            for (var i = 0; i < cuerpo.length; i++) {
                                if (cuerpo[i] == null) {console.log(camionData[0]) }
                                else {
                                    var nodo = cuerpo[i]
                                    nodo = Object.values(nodo);
                                    respuesta[i] = nodo[nodo.length - 1]
                                    respuesta[i].id = camionData[i].id;
                                    respuesta[i].descripcion = camionData[i].descripcion;
                                }
                            }
                            res.send(respuesta);
                        })
                    });
                });
        } catch (err) {
            res.status(500).send(err)
        }
    }

}
