//Require and variable for NPM MySql
var mysql = require("mysql");

//Connection for local or Heroku database
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burgers_db"
    });
}

//User notification info for database connection
connection.connect(function (err) {
    if (err) {
        return err;
    }
    console.log("connected to database...");
});

//Exports connection to orm.js
module.exports = connection;