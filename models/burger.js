//Imports orm object from orm.js
var orm = require("../config/orm");

//Creates an object that contains a 
var burger = {
    //Handles callback data for selectAll function
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res)
        })
    },
    //Handles callback data for insertOne function
    insertOne: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(res) {
            cb(res)
        })
    },
    //Handles callback data for updateOne function
    updateOne: function(obj, con, cb) {
        orm.updateOne("burgers", obj, con, function(res) {
            cb(res)
        })
    }
}
//Exports burger object to burgers_controller.js
module.exports = burger