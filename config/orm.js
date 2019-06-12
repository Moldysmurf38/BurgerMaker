//Imports data from connection.js
var connection = require("../config/connection")

//Creates an array containing variables for a query
function printMarks(num) {
    var arraySql = [];

    for (var i = 0; i < num; i++) {
        arraySql.push("?");
    }
    return arraySql.toString();
}

//Function that converts object into MySql format
function objToSql(ob) {
    var arraySql = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arraySql.push(key + "=" + value);
        }
    }
    return arraySql.toString();
}

//Creates an orm object filled with functions involving queries for MySQL table
var orm = {
    //Function query that finds and sends all data from the MySql table
    selectAll: function (tableIn, cb) {
        var queryString = "select * from " + tableIn;
        connection.query(queryString, function (err, result) {
            if (err) { throw err;
            }
            cb(result);
        })
    },
    //Function query that adds a new burger with its data into the MySql table
    insertOne: function (table, col, val, cb) {
        var queryString = "insert into " + table;
        queryString += " (" + col.toString() + ") " + "VALUES (" + printMarks(val.length) + ") ";
        connection.query(queryString, val, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    //Function query that changes the devoured value of a burger in the MySql table
    updateOne: function (table, obj, con, cb) {
        var queryString = "update " + table;
        queryString += " SET " + objToSql(obj) +" WHERE " + con;
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })

    }
};

//Exports the orm function object to burger.js
module.exports = orm;