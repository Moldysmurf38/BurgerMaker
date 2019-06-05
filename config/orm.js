var connection = require("../config/connection")

function printMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

var orm = {
    selectAll: function (tableIn, cb) {
        var queryString = "select * from " + tableIn;
        connection.query(queryString, function (err, result) {
            if (err) { throw err;
            }
            cb(result);
        })
    },
    insertOne: function (table, col, val, cb) {
        var queryString = "insert into " + table;
        queryString += " (";
        queryString += col.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printMarks(val.length);
        queryString += ") ";
        connection.query(queryString, val, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function (table, objVals, con, cb) {
        var queryString = "update " + table;

        queryString += " SET ";
        queryString += objToSql(objVals);
        queryString += " WHERE ";
        queryString += con;

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })

    }
};

module.exports = orm;