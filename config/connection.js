var mysql = require("mysql");
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    });
}


connection.connect(function (err) {
    if (err) {
        return err;
    }
    console.log("connected to database...");
});

module.exports = connection;