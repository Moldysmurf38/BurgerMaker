var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) {
        return err;
    }
    console.log("connected to database...");
});

module.exports = connection;