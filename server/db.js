var mysql = require('mysql');

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'pharmacy'
});

db.connect(err=>{
    if(err)  console.log("Error Occured , With error => ", err)
    else console.log("Connected to database")
});

module.exports = db;