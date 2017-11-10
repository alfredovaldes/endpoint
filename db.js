const mysql = require('mysql');

var con = mysql.createConnection({
    host: "mysql.trivius-systems.com",
    user: "uberbus",
    password: "proyectoMIAg5",
    database: "uberbus",
    encrypt: true
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


exports.getChofer = function (cb, userData) {
    let query = 'Select * from chofer'
    con.query(query, function (err, results) {
        if (err) return cb(err, null);
        return cb(null, results);
    })
    con.end();
}
exports.setUser = function (cb, userData) {
    var sql = "INSERT INTO user (uid, email, displayName) VALUES ('" + userData.uid + "','" + userData.email + "','" + userData.displayName + "')";
    con.query(sql, function (err, results) {
        if (err) return cb(err, null);
        return cb(null, results);
    })
    con.end();

}
exports.getCamion = function (cb) {
    let query = 'Select * from camiones'
    con.query(query, function (err, results) {
        if (err) return cb(err, null);
        return cb(null, results);
    })
    con.end();
}
exports.getRuta = function (cb) {
    let query = 'Select * from ruta'
    con.query(query, function (err, results) {
        if (err) return cb(err, null);
        return cb(null, results);
    })
    con.end();
    
}
exports.getUser = function (resultado) {
    con.query("SELECT * FROM user", function (err, result, fields) {
        if (err) throw err;
        //console.log(result);
    });
    return resultado;
    con.end();
    
}
exports.conexion = con;