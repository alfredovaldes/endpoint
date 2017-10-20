const mysql = require('mysql');

var con = mysql.createConnection({
    host: "mysql.trivius-systems.com",
    user: "uberbus",
    password: "proyectoMIAg5",
    database: "uberbus"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


exports.getChofer = function (cb) {
    let query = 'Select * from chofer'
    con.query(query, function(err, results){
        if(err) return cb(err, null);
        return cb(null, results);
    })
}

exports.getCamion = function (cb) {
    let query = 'Select * from camiones'
    con.query(query, function(err, results){
        if(err) return cb(err, null);
        return cb(null, results);
    })
}
