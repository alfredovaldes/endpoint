const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "[+H3eW{+H3eW",
    database: "mydb"
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
