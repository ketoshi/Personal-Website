var moment = require('moment');  
var mysql = require('mysql2');
var db = mysql.createConnection({
    host: "localhost",
    user: "ketoshi",
    password: "santa",
    database: "ketoshi_db"
});

db.connect(function(err) {
    if (err) throw err;
});

module.exports = db;