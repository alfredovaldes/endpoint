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
    },
    async get(req,res){
        try{
        var pos;
        rp('https://testfire-miag5.firebaseio.com/camiones/.json')
            .then(await function (body) {
                var respuesta={};
                var cuerpo = JSON.parse(body);
                cuerpo = Object.values(cuerpo); 
                               
                for(var i=0; i< cuerpo.length;i++){
                    console.log(cuerpo[i])
                    if(cuerpo[i]==null){}
                    else{
                        var nodo=cuerpo[i]
                        nodo = Object.values(nodo);
                         respuesta[i-1]=nodo[nodo.length-1]
                    }
                }
                res.send(respuesta);
            });
    } catch (err) {
        res.status(500).send(err)
    }
    }
}