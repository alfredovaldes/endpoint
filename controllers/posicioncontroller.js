var request = require('request');
var rp = require('request-promise');

module.exports = {
    async show(req, res) {
        try {
            var pos;
            rp('https://testfire-miag5.firebaseio.com/camiones/' + req.params.id + '.json')
                .then(await function (body) {
                    var cuerpo = JSON.parse(body)
                    cuerpo = Object.values(cuerpo);
                    res.send(cuerpo[cuerpo.length-1]);
                });
        } catch (err) {
            res.status(500).send(err)
        }
    }
}