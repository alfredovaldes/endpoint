let mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "[+H3eW{+H3eW",
    database: "censo2010"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


exports.getEnt = function (cb) {
    let query = 'Select * from id_ent'
    con.query(query, function(err, results){
        if(err) return cb(err, null);
        return cb(null, results);
    })
}
exports.getMun = function (q, cb) {
    let query = 'Select * from id_mun where CE = '+q.CE;
    con.query(query, function(err, results){
        if(err) return cb(err, null);
        return cb(null, results);
    })
}

exports.getPob = function (q, cb) {
    if(!q.CE||!q.CM){return cb (500, null)}
    let query = 'select SUM(pobmas) as PobM, Sum(pobfem) as PobF, SUM(pobtot) as PobT from censo2010 where CE = '+q.CE+' AND CM = '+q.CM
    con.query(query, function(err, results){
        if(err) return cb(err, null);
        return cb(null, results[0]);
    })
}