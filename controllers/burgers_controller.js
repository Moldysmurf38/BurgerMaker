//Creates variables and requires npm express and the express function
var express = require("express")
var router = express.Router();

//Imports data from burger.js
var burger = require("../models/burger");

//Function that creates main page using index.handlebars and all the table query data
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var burgObj = {
            burgers: data
        }
       res.render("index", burgObj)
    });
});
//Function that changes a burger in the table and on the page when pressing the eat me button
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    burger.updateOne(
      {
        devoured: req.body.devoured
      },
      condition, function(result) {
        //Sends update message based on whether the update successfully changed a row in the table or not
        if (result.changedRows === 0) {
          return res.status(404).end();
        }
        res.status(200).end();
  
      }
    );
  });
//Function that handles form submission data in order to add a new burger to the MySql table
router.post("/", function (req, res) {
    burger.insertOne(["name", "devoured"], [req.body.name, req.body.devoured], function (result) {
      res.json({ id: result.insertId });
    });
});
//Exports express function to server.js
module.exports = router;